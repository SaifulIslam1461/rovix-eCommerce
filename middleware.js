import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'rovix-super-secret-key');

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('rovix_admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      const allowedRoles = ['SUPER_ADMIN', 'ADMIN', 'MANAGER', 'CUSTOMER_SUPPORT', 'WAREHOUSE_STAFF'];
      if (!allowedRoles.includes(payload.role)) {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    } catch (err) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};
