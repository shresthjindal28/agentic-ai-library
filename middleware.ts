import { NextResponse } from 'next/server';
import { redirectToSignIn } from '@clerk/nextjs';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import type { NextRequest } from 'next/server';

// Define public routes that don't require authentication
const publicRoutes = [
  "/",
  "/agents",
  "/docs",
  "/api/webhook",
  "/api/trpc",
];

// Define routes that should redirect to dashboard if already authenticated
const authRoutes = [
  "/sign-in*",
  "/sign-up*",
];

// Check if Clerk keys are configured
const isClerkConfigured = 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key' &&
  process.env.CLERK_SECRET_KEY && 
  process.env.CLERK_SECRET_KEY !== 'your_clerk_secret_key';

// Create a middleware function that conditionally applies Clerk
export default isClerkConfigured 
  ? clerkMiddleware((auth, req) => {
      const isPublicRoute = createRouteMatcher(publicRoutes);
      const isAuthRoute = createRouteMatcher(authRoutes);

      // Allow all public routes
      if (isPublicRoute(req)) {
        return NextResponse.next();
      }

      const { userId } = auth();

      // Handle authenticated users visiting auth pages
      if (userId && isAuthRoute(req)) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      // Handle unauthenticated users visiting protected routes (e.g., dashboard)
      if (!userId && req.nextUrl.pathname.startsWith('/dashboard')) {
        return redirectToSignIn({ returnBackUrl: req.url });
      }

      return NextResponse.next();
    })
  : (req: NextRequest) => {
      console.warn('Clerk is not properly configured. Authentication is disabled.');
      return NextResponse.next();
    };

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};