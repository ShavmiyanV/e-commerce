"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Dashboard</h1>
      {user ? <p>Welcome {user.email}</p> : <p>Loading...</p>}
    </div>
  );
}
