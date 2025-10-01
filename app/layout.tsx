import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Agent Library',
  description: 'A library of AI agents built with LangChain and Next.js',
};

// Check if Clerk keys are configured
const isClerkConfigured = 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If Clerk is not configured, render without ClerkProvider
  if (!isClerkConfigured) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    );
  }

  // Otherwise, use ClerkProvider
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
