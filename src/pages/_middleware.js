const secret = process.env.JWT_SEC

import { verify } from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export default function middleware(req) {
  const { cookies } = req
  const pathname = req.nextUrl.pathname
  const jwt = cookies.accessToken

  // Restrict login/signup page if valid JWT
  if (pathname.includes('/login') || pathname.includes('/signup')) {
    if (jwt) {
      try {
        verify(jwt, secret)
        const url = req.nextUrl.clone()
        url.pathname = '/'
        return NextResponse.redirect(url)
      } catch (error) {
        return NextResponse.next()
      }
    }
  }

  // Redirect to login page if trying to access main index ('/') and not authenticated
  if (
    pathname === '/' ||
    pathname === '/explore' ||
    pathname === '/direct/inbox'
  ) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'

    // No JWT saved in cookies, redirect to login page
    if (!jwt) {
      return NextResponse.redirect(url)
    }

    // Verify jwt, if authenticated, move to next req
    try {
      verify(jwt, secret)
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(url)
    }
  }
}
