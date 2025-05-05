import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get('user')
  const isLoggedIn = !!userCookie?.value
  const path = request.nextUrl.pathname
console.log("isLoggedIn", isLoggedIn)
  // Redirect logged-in users from login page to dashboard
  if (isLoggedIn && path === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Protect dashboard routes
  const isDashboardRoute = path.startsWith('/dashboard')
  if (isDashboardRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
  ],
}