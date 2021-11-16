import { NextResponse } from 'next/server'
export async function middleware(req) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/pay')) {
    let restOfUrl = pathname.substring(5)
    let val = parseFloat(restOfUrl)
    return NextResponse.rewrite(
      `https://paypal.me/kamilzurek/${!isNaN(val) ? val : ''}`
    )
  }
  return NextResponse.next()
}
