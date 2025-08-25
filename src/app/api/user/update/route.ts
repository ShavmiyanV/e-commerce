// app/api/user/update/route.ts
import { NextResponse } from "next/server";
import User from "../../../../../models/User";
import { connectDB } from "../../../../../lib/db";
import bcrypt from "bcryptjs";

export async function PUT(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { email, phone, address, password } = body;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (phone !== undefined) user.phone = phone;
    if (address !== undefined) user.address = address;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    return NextResponse.json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
