import { NextResponse } from 'next/server';
import { getCache, setCache } from '@/lib/redis';
import { getAllAgents } from '@/lib/agents';

// Cache expiration time in seconds (10 minutes)
const CACHE_EXPIRATION = 600;

export async function GET() {
  try {
    // Try to get agents from Redis cache first
    const cachedAgents = await getCache<unknown[]>('agents:all');
    
    if (cachedAgents) {
      console.log('Serving agents from cache');
      return NextResponse.json({ agents: cachedAgents });
    }
    
    // If not in cache, get from database/source
    console.log('Cache miss, fetching agents from source');
    const agents = getAllAgents();
    
    // Store in cache for future requests
    await setCache('agents:all', agents, CACHE_EXPIRATION);
    
    return NextResponse.json({ agents });
  } catch (error) {
    console.error('Error fetching agents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch agents' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    
    // Validate request body
    if (!body.name || !body.description) {
      return NextResponse.json(
        { error: 'Name and description are required' },
        { status: 400 }
      );
    }
    
    // In a real app, you would save to database here
    // For now, we'll just return the created agent
    const newAgent = {
      id: `agent-${Date.now()}`,
      name: body.name,
      description: body.description,
      // Add other fields as needed
    };
    
    // Invalidate cache when adding new agent
    await setCache('agents:all', null, 0);
    
    return NextResponse.json({ agent: newAgent }, { status: 201 });
  } catch (error) {
    console.error('Error creating agent:', error);
    return NextResponse.json(
      { error: 'Failed to create agent' },
      { status: 500 }
    );
  }
}