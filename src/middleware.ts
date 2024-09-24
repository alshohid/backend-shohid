import { NextRequest, NextResponse } from "next/server";
import { VerifyToken } from "./utill/jwtTokenhelper";

export async function middleware(req: NextRequest) {
  // Handle API calls to /api/dashboard
  if (req.nextUrl.pathname.startsWith("/api/dashboard")) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      // Return 401 if token is missing
      return NextResponse.json(
        { status: "fail", message: "Unauthorized: Token missing" },
        { status: 401 }
      );
    }

    try {
      // Verify token and extract payload
      const payload = await VerifyToken(token);

      if (!payload || !payload.email || !payload.id) {
        throw new Error("Invalid token payload");
      }

      // Create a copy of headers and set email and id
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set("email", payload.email.toString());
      requestHeaders.set("id", payload.id.toString());

      // Pass the modified headers to the next response
      return NextResponse.next({
        request: { headers: requestHeaders },
      });
    } catch (error) {
      // Handle token verification failure
      return NextResponse.json(
        { status: "fail", message: "Unauthorized: Invalid or expired token" },
        { status: 401 }
      );
    }
  }

  // Allow all requests to /api/user
  if (req.nextUrl.pathname.startsWith("/api/user")) {
    return NextResponse.next();
  }

  // Fallback for all other routes
  return NextResponse.next();
}
