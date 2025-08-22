import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../../../../../models/User";
import { connectDB } from "../../../../../lib/db";
import { signToken } from "../../../../../lib/auth";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 401 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 401 });

  const token = signToken({ id: user._id, email: user.email });

  const response = NextResponse.json({ message: "Login Successful" });
  response.cookies.set("token", token, { httpOnly: true, secure: true });
  return response;
}
