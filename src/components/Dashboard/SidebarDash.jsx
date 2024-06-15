"use client";

import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  QueueListIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export default function SidebarDash() {
  const pathname = usePathname();

  const linkActive = (path) => pathname.startsWith(path);

  return (
    <aside className="w-60 bg-white py-5 drop-shadow-2xl transition-all">
      <ul className="flex flex-col">
        <div className="mx-auto mt-4">
          <h2 className="text-dark-blue my-auto text-xl font-semibold">
            My Dashboard
          </h2>
        </div>
        <div className="mt-10 flex flex-col">
          <Link
            href="/dashboard"
            className={`flex gap-x-4 rounded-r-lg border-l-4 px-2 py-4 hover:transition-all ${
              pathname === "/dashboard"
                ? "bg-dark-blue text-white"
                : "text-dark-blue hover:bg-primary-blue border-transparent font-semibold hover:bg-opacity-10"
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            <p className="my-auto">Dashboard</p>
          </Link>
          <Link
            href="/dashboard/catalog"
            className={`flex gap-x-4 rounded-r-lg border-l-4 px-2 py-4 hover:transition-all ${
              pathname === "/dashboard/catalog"
                ? "bg-dark-blue text-white"
                : "text-dark-blue hover:bg-primary-blue border-transparent font-semibold hover:bg-opacity-10"
            }`}
          >
            <QueueListIcon className="h-6 w-6" />
            <p className="my-auto">Catalog</p>
          </Link>
          <Link
            href="/dashboard/order"
            className={`flex gap-x-4 rounded-r-lg border-l-4 px-2 py-4 hover:transition-all ${
              pathname === "/dashboard/order"
                ? "bg-dark-blue text-white"
                : "text-dark-blue hover:bg-primary-blue border-transparent font-semibold hover:bg-opacity-10"
            }`}
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <p className="my-auto">Order</p>
          </Link>
          <Link
            href="/dashboard/profile"
            className={`flex gap-x-4 rounded-r-lg border-l-4 px-2 py-4 hover:transition-all ${
              pathname === "/dashboard/profile"
                ? "bg-dark-blue text-white"
                : "text-dark-blue hover:bg-primary-blue border-transparent font-semibold hover:bg-opacity-10"
            }`}
          >
            <UserCircleIcon className="h-6 w-6" />
            <p className="my-auto">Profile</p>
          </Link>
        </div>
      </ul>
    </aside>
  );
}
