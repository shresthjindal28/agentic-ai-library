import { NextRequest, NextResponse } from 'next/server';
import {
  getRedisClient,
  getCache,
  setCache,
  incrementCounter,
  hashGetAll,
  hashSet,
} from '@/lib/redis';
import { auth } from '@clerk/nextjs/server';

const CACHE_EXPIRATION = 3600;

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(req.url);
    const allUsers = url.searchParams.get('all') === 'true';

    if (allUsers) {
      const isAdmin = await checkIfAdmin(userId);
      if (!isAdmin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }

      const cacheKey = 'usage:all';
      let usageStats = await getCache<Record<string, unknown>>(cacheKey);

      if (!usageStats) {
        usageStats = (await hashGetAll<unknown>('user_usage')) || {};
        await setCache(cacheKey, usageStats, CACHE_EXPIRATION);
      }

      return NextResponse.json({ usage: usageStats });
    } else {
      const cacheKey = `usage:${userId}`;
      let userUsage = await getCache<unknown>(cacheKey);

      if (!userUsage) {
        userUsage =
          (await hashGetAll<unknown>(`user:${userId}:usage`)) || {
            apiCalls: 0,
            agents: {},
            lastUsed: null,
          };

        await setCache(cacheKey, userUsage, CACHE_EXPIRATION);
      }

      return NextResponse.json({ usage: userUsage });
    }
  } catch (error) {
    console.error('Error fetching usage stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { agentId, operation } = body;

    if (!agentId || !operation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const totalCalls = await incrementCounter('total_api_calls');
    const userKey = `user:${userId}:usage`;
    const now = new Date().toISOString();

    await hashSet(userKey, 'lastUsed', now);

    const apiCalls = await incrementCounter(`${userKey}:apiCalls`);
    const agentCalls = await incrementCounter(`${userKey}:agent:${agentId}`);

    await hashSet('user_usage', userId, {
      apiCalls,
      lastUsed: now,
      agents: { [agentId]: agentCalls },
    });

    const redis = getRedisClient();
    await redis.del(`usage:${userId}`);
    await redis.del('usage:all');

    return NextResponse.json({
      success: true,
      usage: {
        totalCalls,
        userCalls: apiCalls,
        agentCalls,
      },
    });
  } catch (error) {
    console.error('Error recording usage:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

async function checkIfAdmin(userId: string): Promise<boolean> {
  const adminUsers = await getCache<string[]>('admin_users');
  return adminUsers ? adminUsers.includes(userId) : false;
}
