"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/dashboard");
  }

  return (
    <div className="max-w-sm mx-auto p-6 border rounded">
      <form onSubmit={handleSubmit} className="mb-4">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
          Login
        </button>
      </form>
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500 underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
