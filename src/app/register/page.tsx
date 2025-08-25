"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/login");
    else {
      const data = await res.json();
      alert(data.error || "Registration failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-6 border rounded space-y-3"
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <input
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <input
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Register
      </button>
    </form>
  );
}
