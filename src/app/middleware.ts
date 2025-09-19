import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export function middleware(req: NextRequest) {
    const token = req.cookies.get ('token')?.value

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (!token) {
            const loginUrl = new URL('/auth/login', req.url)
            return NextResponse.redirect(loginUrl)
        }

        try {
            jwt.verify(token, process.env.JWT_SECRET!)
        } catch {
            const loginUrl = new URL('/auth/login', req.url)
            return NextResponse.redirect(loginUrl)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['dashboard/:path*']
}