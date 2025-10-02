import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  try {
    const clerkUser = await currentUser();
    const userId = clerkUser?.id;

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const clerkUser = await currentUser();
    const userId = clerkUser?.id;

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { favoriteAgents } = await req.json();

    await connectToDatabase();

    let user = await User.findOne({ clerkId: userId });

    if (user) {
      user.favoriteAgents = favoriteAgents || user.favoriteAgents;
      user.updatedAt = new Date();
      await user.save();
    } else {
      user = await User.create({
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress || '',
        firstName: clerkUser.firstName || '',
        lastName: clerkUser.lastName || '',
        username: clerkUser.username || '',
        profileImageUrl: clerkUser.imageUrl || '',
        emailVerified: clerkUser.emailAddresses[0]?.verification?.status === 'verified' || false,
        phoneNumber: clerkUser.phoneNumbers?.[0]?.phoneNumber || '',
        phoneVerified: clerkUser.phoneNumbers?.[0]?.verification?.status === 'verified' || false,
        twoFactorEnabled: clerkUser.twoFactorEnabled || false,
        lastSignInAt: clerkUser.lastSignInAt ? new Date(clerkUser.lastSignInAt) : new Date(),
        externalAccounts: clerkUser.externalAccounts?.map(account => ({
          provider: account.provider,
          providerUserId: account.externalId,
          emailAddress: account.emailAddress
        })) || [],
        favoriteAgents: favoriteAgents || [],
        metadata: {
          public: clerkUser.publicMetadata || {},
          private: clerkUser.privateMetadata || {},
          unsafe: clerkUser.unsafeMetadata || {}
        }
      });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
