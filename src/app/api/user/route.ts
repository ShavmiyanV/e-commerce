import { NextResponse } from "next/server";
import { verifyToken } from "../../../../lib/auth";

export async function GET(req: Request) {
  const token = req.headers.get("cookies")?.split("token=")[1];
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const decoded = verifyToken(token);
  if (!decoded)
    return NextResponse.json({ error: "Invalid Token" }, { status: 401 });

  return NextResponse.json({ user: decoded });
}
