import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from './lib/session'

const publicRoutes = ['/auth/signin', '/auth/signup', '/auth/verify', '/api/auth/callback/email'] 

export default async function middleware(req: NextRequest) { 
    const path = req.nextUrl.pathname

    const isPublicRoute = publicRoutes.some(prefix => 
        prefix === '/' ? path === '/' : path.startsWith(prefix)
    )
    const cookie = req.cookies.get('session')?.value
    const session = await decrypt(cookie)
    
    if (isPublicRoute && session?.userId) {
        if (!path.startsWith('/onboarding/products')) {
        return NextResponse.redirect(new URL('/onboarding/products', req.nextUrl))
        }
    }

    if (!isPublicRoute && !session?.userId) {
        const signinUrl = new URL('/auth/signin', req.nextUrl)
        
        return NextResponse.redirect(signinUrl)
    }

    return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}