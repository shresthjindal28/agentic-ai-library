import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  username: String,
  profileImageUrl: String,
  emailVerified: Boolean,
  phoneNumber: String,
  phoneVerified: Boolean,
  twoFactorEnabled: Boolean,
  lastSignInAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  externalAccounts: [{
    provider: String,
    providerUserId: String,
    emailAddress: String
  }],
  favoriteAgents: [{
    type: String,
    ref: 'Agent'
  }],
  metadata: {
    type: Schema.Types.Mixed,
    default: {}
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);