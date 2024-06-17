"use client";

import FooterDash from "@/components/Dashboard/FooterDash";
import NavbarDash from "@/components/Dashboard/NavbarDash";
import SidebarDash from "@/components/Dashboard/SidebarDash";
import { isAuthenticated } from "@/service/auth";
import { useRouter } from "next/navigation";
import React from "react";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  if (!isAuthenticated()) {
    router.push("/login");
  }

  return (
    <main className="flex h-screen">
      <SidebarDash />
      <div className="flex flex-1 flex-col overflow-hidden">
        <NavbarDash />
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 px-8">
          {children}
        </div>
        <FooterDash />
      </div>
    </main>
  );
}
