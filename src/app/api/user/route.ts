import { NextResponse } from "next/server";
import { cookies } from "next/headers"; 
import { verifyToken } from "../../../../lib/auth";

export async function GET() {
  // Get cookie value
  const token = cookies().get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Verify token
  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
  }

  // Return decoded user
  return NextResponse.json({ user: decoded });
}
