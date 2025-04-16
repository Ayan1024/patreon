"use client";
import React from "react";
import { useSession } from "next-auth/react";

function SettingsPage() {
  const { data: session } = useSession(); // ✅ declare session here

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="text-lg">
        Manage your account settings here.{" "}
        {session?.user?.username ?? "No user logged in"}
      </p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Account Information</h2>
        <p className="text-md">Update your email and password.</p>
        {/* Add form elements for email and password updates */}
      </div>
    </div>
  );
}

export default SettingsPage;
