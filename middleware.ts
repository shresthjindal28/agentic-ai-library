import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher, getAuth } from '@clerk/nextjs/server';
import type { NextRequest } from 'next/server';

const publicRoutes = [
  "/",
  "/agents",
  "/docs",
  "/api/webhook",
  "/api/trpc",
];

const authRoutes = [
  "/sign-in",
  "/sign-up",
];

const isClerkConfigured =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key' &&
  process.env.CLERK_SECRET_KEY &&
  process.env.CLERK_SECRET_KEY !== 'your_clerk_secret_key';

export default isClerkConfigured
  ? clerkMiddleware(async (auth, req: NextRequest) => {
      const isPublicRoute = createRouteMatcher(publicRoutes);
      const isAuthRoute = createRouteMatcher(authRoutes);

      if (isPublicRoute(req)) {
        return NextResponse.next();
      }

      const { userId } = await auth(); // `auth` returns Promise with user info

      if (userId && isAuthRoute(req)) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      if (!userId && (req.nextUrl.pathname.startsWith('/dashboard') || req.nextUrl.pathname.startsWith('/agents') || req.nextUrl.pathname.startsWith('/docs'))) {
        const signInUrl = new URL('/sign-in', req.url);
        signInUrl.searchParams.set('redirect_url', req.url);
        return NextResponse.redirect(signInUrl);
      }

      return NextResponse.next();
    })
  : (req: NextRequest) => {
      console.warn('Clerk is not properly configured. Authentication is disabled.');
      return NextResponse.next();
    };

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
