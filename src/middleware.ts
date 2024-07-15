import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/become_doctor(.*)'])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req))
    auth().protect({ unauthenticatedUrl: new URL('/login', req.url) as any })
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
