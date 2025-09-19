import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { connectDB } from "../../../../../lib/db";
import User from "../../../../../models/User";

export async function GET() {
  await connectDB();
  const token = (await cookies()).get("token")?.value;
  if (!token) return NextResponse.json(null, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };
    const user = await User.findById(decoded.id).select("-password");
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(null, { status: 401 });
  }
}
