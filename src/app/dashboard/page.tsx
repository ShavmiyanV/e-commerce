"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    password: "",
  });

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setFormData({
          phone: data.user?.phone || "",
          address: data.user?.address || "",
          password: "",
        });
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/user/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email, // identify user
        ...formData,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Profile updated!");
      setUser(data.user);
      setFormData({ ...formData, password: "" }); // reset password field
    } else {
      alert(data.error || "Update failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      {user ? (
        <div>
          <p className="mb-4">Welcome {user.email}</p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md bg-gray-100 p-4 rounded-lg"
          >
            <div>
              <label className="block text-sm">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm">New Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
