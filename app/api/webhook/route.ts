import { WebhookEvent } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  const headersList = await headers();
  const svix_id = headersList.get('svix-id');
  const svix_timestamp = headersList.get('svix-timestamp');
  const svix_signature = headersList.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing svix headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return new Response('Error: Missing webhook secret', { status: 500 });
  }

  const event = payload as WebhookEvent;

  await connectToDatabase();

  if (event.type === 'user.created') {
    const { id, email_addresses, first_name, last_name } = event.data;

    await User.create({
      clerkId: id,
      email: email_addresses[0]?.email_address || '',
      firstName: first_name || '',
      lastName: last_name || '',
      favoriteAgents: [],
    });
  }

  if (event.type === 'user.deleted') {
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
  }

  return NextResponse.json({ success: true });
}
