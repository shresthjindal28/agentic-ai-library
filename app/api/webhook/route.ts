import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

// Extend Clerk WebhookEvent type to include missing fields
interface ExtendedUserCreatedEvent {
  type: "user.created";
  data: {
    id: string;
    email_addresses: { email_address: string }[];
    first_name?: string;
    last_name?: string;
    username?: string;
    profile_image_url?: string;
    phone_numbers?: { phone_number: string }[];
    last_sign_in_at?: number;
    created_at?: number;
    updated_at?: number;
    email_verified?: boolean;
    phone_verified?: boolean;
    two_factor_enabled?: boolean;
    external_accounts?: {
      provider: string;
      provider_user_id: string;
      email_address: string;
    }[];
    public_metadata?: Record<string, unknown>;
    private_metadata?: Record<string, unknown>;
    unsafe_metadata?: Record<string, unknown>;
  };
}

interface ExtendedUserDeletedEvent {
  type: "user.deleted";
  data: {
    id: string;
  };
}

type ExtendedClerkEvent = ExtendedUserCreatedEvent | ExtendedUserDeletedEvent;

export async function POST(req: NextRequest) {
  const headersList = await headers();
  const svix_id = headersList.get("svix-id");
  const svix_timestamp = headersList.get("svix-timestamp");
  const svix_signature = headersList.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing svix headers", { status: 400 });
  }

  const payload = await req.json();
  const event = payload as ExtendedClerkEvent;

  await connectToDatabase();

  if (event.type === "user.created") {
    const {
      id,
      email_addresses,
      first_name,
      last_name,
      username,
      profile_image_url,
      phone_numbers,
      last_sign_in_at,
      created_at,
      updated_at,
      email_verified,
      phone_verified,
      two_factor_enabled,
      external_accounts,
      public_metadata,
      private_metadata,
      unsafe_metadata,
    } = event.data;

    await User.create({
      clerkId: id,
      email: email_addresses[0]?.email_address || "",
      firstName: first_name || "",
      lastName: last_name || "",
      username: username || "",
      profileImageUrl: profile_image_url || "",
      emailVerified: email_verified || false,
      phoneNumber: phone_numbers?.[0]?.phone_number || "",
      phoneVerified: phone_verified || false,
      twoFactorEnabled: two_factor_enabled || false,
      lastSignInAt: last_sign_in_at ? new Date(last_sign_in_at) : undefined,
      createdAt: created_at ? new Date(created_at) : new Date(),
      updatedAt: updated_at ? new Date(updated_at) : new Date(),
      externalAccounts:
        external_accounts?.map((account) => ({
          provider: account.provider,
          providerUserId: account.provider_user_id,
          emailAddress: account.email_address,
        })) || [],
      favoriteAgents: [],
      metadata: {
        public: public_metadata || {},
        private: private_metadata || {},
        unsafe: unsafe_metadata || {},
      },
    });
  }

  if (event.type === "user.deleted") {
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
  }

  return NextResponse.json({ success: true });
}
