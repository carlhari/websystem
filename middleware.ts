import { NextRequest, NextResponse } from 'next/server';
import { getAuthToken, verifyToken } from './src/app/utils/auth';

export async function middleware(req: NextRequest) {
    const token = getAuthToken(req); // Get the token from the request (cookies or headers)
    const { pathname } = req.nextUrl;

    // Check if the token is valid
    const isAuthenticated = token ? verifyToken(token) : false;

    // If not authenticated and trying to access a protected route, redirect to login
    if (!isAuthenticated && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    // If authenticated and trying to access sign-in page, redirect to dashboard
    if (isAuthenticated && (pathname === '/signin')) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Allow access to the requested route
    return NextResponse.next();
}

export const config = {
    matcher: ['/signin', '/dashboard'],
};
