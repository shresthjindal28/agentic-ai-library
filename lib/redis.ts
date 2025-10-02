import { Redis } from 'ioredis';

// Configuration options for Redis
const redisOptions = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times: number) => {
    // Exponential backoff for reconnection
    return Math.min(times * 50, 2000);
  }
};

// Create Redis client singleton
let redisClient: Redis | null = null;

export function getRedisClient(): Redis {
  if (!redisClient) {
    redisClient = new Redis(redisOptions);
    
    // Handle connection events
    redisClient.on('error', (err) => {
      console.error('Redis connection error:', err);
    });
    
    redisClient.on('connect', () => {
      console.log('Connected to Redis');
    });
  }
  
  return redisClient;
}

// Helper functions for common Redis operations
export async function setCache(key: string, value: unknown, expireSeconds?: number): Promise<void> {
  const redis = getRedisClient();
  const serializedValue = JSON.stringify(value);
  
  if (expireSeconds) {
    await redis.setex(key, expireSeconds, serializedValue);
  } else {
    await redis.set(key, serializedValue);
  }
}

export async function getCache<T>(key: string): Promise<T | null> {
  const redis = getRedisClient();
  const value = await redis.get(key);
  
  if (!value) return null;
  
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    console.error('Error parsing Redis value:', error);
    return null;
  }
}

export async function deleteCache(key: string): Promise<void> {
  const redis = getRedisClient();
  await redis.del(key);
}

export async function incrementCounter(key: string): Promise<number> {
  const redis = getRedisClient();
  return await redis.incr(key);
}

// Rate limiting helper
export async function checkRateLimit(
  identifier: string, 
  limit: number, 
  windowSeconds: number
): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
  const redis = getRedisClient();
  const key = `ratelimit:${identifier}`;
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - windowSeconds;
  
  // Remove old entries
  await redis.zremrangebyscore(key, 0, windowStart);
  
  // Count requests in current window
  const requestCount = await redis.zcard(key);
  
  // Check if limit exceeded
  const allowed = requestCount < limit;
  
  if (allowed) {
    // Add current timestamp to sorted set
    await redis.zadd(key, now, `${now}-${Math.random().toString(36).substring(2, 10)}`);
    // Set expiry on the key
    await redis.expire(key, windowSeconds);
  }
  
  // Calculate reset time
  const oldestTimestamp = await redis.zrange(key, 0, 0, 'WITHSCORES');
  const resetTime = oldestTimestamp.length > 1 
    ? parseInt(oldestTimestamp[1]) + windowSeconds 
    : now + windowSeconds;
  
  return {
    allowed,
    remaining: Math.max(0, limit - requestCount),
    resetTime
  };
}

// Hash operations for storing structured data
export async function hashSet(key: string, field: string, value: unknown): Promise<void> {
  const redis = getRedisClient();
  await redis.hset(key, field, JSON.stringify(value));
}

export async function hashGet<T>(key: string, field: string): Promise<T | null> {
  const redis = getRedisClient();
  const value = await redis.hget(key, field);
  
  if (!value) return null;
  
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    console.error('Error parsing Redis hash value:', error);
    return null;
  }
}

export async function hashGetAll<T>(key: string): Promise<Record<string, T> | null> {
  const redis = getRedisClient();
  const values = await redis.hgetall(key);
  
  if (!values || Object.keys(values).length === 0) return null;
  
  try {
    const result: Record<string, T> = {};
    for (const [field, value] of Object.entries(values)) {
      result[field] = JSON.parse(value) as T;
    }
    return result;
  } catch (error) {
    console.error('Error parsing Redis hash values:', error);
    return null;
  }
}

// List operations for queues and recent items
export async function listPush(key: string, value: unknown): Promise<void> {
  const redis = getRedisClient();
  await redis.rpush(key, JSON.stringify(value));
}

export async function listRange<T>(key: string, start: number, end: number): Promise<T[]> {
  const redis = getRedisClient();
  const values = await redis.lrange(key, start, end);
  
  return values.map(value => {
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      console.error('Error parsing Redis list value:', error);
      return null as unknown as T;
    }
  }).filter(Boolean);
}

// Pub/Sub for real-time updates
export function createSubscriber(channel: string, callback: (message: unknown) => void): () => void {
  const subscriber = new Redis(redisOptions);
  
  subscriber.subscribe(channel);
  subscriber.on('message', (receivedChannel, message) => {
    if (receivedChannel === channel) {
      try {
        const parsedMessage = JSON.parse(message);
        callback(parsedMessage);
      } catch (error) {
        console.error('Error parsing Redis pub/sub message:', error);
        callback(message);
      }
    }
  });
  
  // Return unsubscribe function
  return () => {
    subscriber.unsubscribe(channel);
    subscriber.quit();
  };
}

export async function publish(channel: string, message: unknown): Promise<void> {
  const redis = getRedisClient();
  await redis.publish(channel, JSON.stringify(message));
}