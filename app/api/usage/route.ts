import { NextRequest, NextResponse } from 'next/server';
import { getRedisClient, getCache, setCache, incrementCounter, hashGetAll, hashSet } from '@/lib/redis';
import { auth } from '@clerk/nextjs';

// Cache expiration time in seconds (1 hour)
const CACHE_EXPIRATION = 3600;

// Get usage statistics for the current user or all users (admin only)
export async function GET(req: NextRequest) {
  try {
    const { userId, sessionId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Check if admin for all users stats
    const url = new URL(req.url);
    const allUsers = url.searchParams.get('all') === 'true';
    
    if (allUsers) {
      // Check if user is admin (implement your admin check logic)
      const isAdmin = await checkIfAdmin(userId);
      
      if (!isAdmin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
      
      // Get all users' usage from cache or compute
      const cacheKey = 'usage:all';
      let usageStats = await getCache<Record<string, any>>(cacheKey);
      
      if (!usageStats) {
        // If not in cache, get from Redis hash
        usageStats = await hashGetAll<any>('user_usage') || {};
        
        // Cache the result
        await setCache(cacheKey, usageStats, CACHE_EXPIRATION);
      }
      
      return NextResponse.json({ usage: usageStats });
    } else {
      // Get individual user usage
      const cacheKey = `usage:${userId}`;
      let userUsage = await getCache<any>(cacheKey);
      
      if (!userUsage) {
        // If not in cache, get from Redis hash
        userUsage = await hashGetAll<any>(`user:${userId}:usage`) || {
          apiCalls: 0,
          agents: {},
          lastUsed: null
        };
        
        // Cache the result
        await setCache(cacheKey, userUsage, CACHE_EXPIRATION);
      }
      
      return NextResponse.json({ usage: userUsage });
    }
  } catch (error) {
    console.error('Error fetching usage stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Record usage for the current user
export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await req.json();
    const { agentId, operation } = body;
    
    if (!agentId || !operation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Increment global counter
    const totalCalls = await incrementCounter('total_api_calls');
    
    // Increment user-specific counters
    const userKey = `user:${userId}:usage`;
    const now = new Date().toISOString();
    
    // Update user usage hash
    await hashSet(userKey, 'lastUsed', now);
    await incrementCounter(`${userKey}:apiCalls`);
    await incrementCounter(`${userKey}:agent:${agentId}`);
    
    // Get updated user usage
    const apiCalls = await incrementCounter(`${userKey}:apiCalls`);
    const agentCalls = await incrementCounter(`${userKey}:agent:${agentId}`);
    
    // Update all users hash for admin view
    await hashSet('user_usage', userId, {
      apiCalls,
      lastUsed: now,
      agents: { [agentId]: agentCalls }
    });
    
    // Invalidate caches
    const redis = getRedisClient();
    await redis.del(`usage:${userId}`);
    await redis.del('usage:all');
    
    return NextResponse.json({ 
      success: true, 
      usage: {
        totalCalls,
        userCalls: apiCalls,
        agentCalls
      }
    });
  } catch (error) {
    console.error('Error recording usage:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Helper function to check if user is admin
async function checkIfAdmin(userId: string): Promise<boolean> {
  // Implement your admin check logic here
  // For example, check against a list of admin users in Redis or your database
  const adminUsers = await getCache<string[]>('admin_users');
  return adminUsers ? adminUsers.includes(userId) : false;
}