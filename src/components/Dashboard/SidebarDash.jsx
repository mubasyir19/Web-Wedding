"use client";

import Link from "next/link";
import {
  HomeIcon,
  QueueListIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function SidebarDash() {
  const pathname = usePathname();
  const router = useRouter();

  const linkActive = (path) => pathname.startsWith(path);

  const handleLogout = async () => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "see you on next time",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Logout",
      confirmButtonColor: "#d33",
      cancelButtonText: "Cancel",
    });

    if (confirmation.isConfirmed) {
      try {
        localStorage.removeItem("token");
        Swal.fire("Success Logout!", "Your session has end.", "success");
        router.push("/login");
      } catch (error) {
        console.error("Error:", error);
        Swal.fire("Error!", "Failed to logged out.", "error");
        // Swal.fire("Error!", "An error occurred while logout.", "error");
      }
    }
  };

  return (
    <aside className="w-60 bg-white py-5 drop-shadow-2xl transition-all">
      <ul className="flex flex-col">
        <div className="mx-auto mt-4">
          <h2 className="my-auto text-xl font-semibold text-dark-blue">
            My Dashboard
          </h2>
        </div>
        <div className="mt-10 flex flex-col">
          <Link
            href="/dashboard"
            className={`flex gap-x-4 rounded-r-lg border-l-4 px-2 py-4 hover:transition-all ${
              pathname === "/dashboard"
                ? "bg-dark-blue text-white"
                : "border-transparent font-semibold text-dark-blue hover:bg-primary-blue hover:bg-opacity-10"
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            <p className="my-auto">Dashboard</p>
          </Link>
          <Link
            href="/dashboard/catalog"
            className={`flex gap-x-4 rounded-r-lg border-l-4 px-2 py-4 hover:transition-all ${
              linkActive("/dashboard/catalog")
                ? "bg-dark-blue text-white"
                : "border-transparent font-semibold text-dark-blue hover:bg-primary-blue hover:bg-opacity-10"
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
                : "border-transparent font-semibold text-dark-blue hover:bg-primary-blue hover:bg-opacity-10"
            }`}
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <p className="my-auto">Order</p>
          </Link>
          <Link
            href={`/dashboard/profile`}
            className={`flex gap-x-4 rounded-r-lg border-l-4 px-2 py-4 hover:transition-all ${
              pathname === "/dashboard/profile"
                ? "bg-dark-blue text-white"
                : "border-transparent font-semibold text-dark-blue hover:bg-primary-blue hover:bg-opacity-10"
            }`}
          >
            <UserCircleIcon className="h-6 w-6" />
            <p className="my-auto">Profile</p>
          </Link>
          <button
            onClick={handleLogout}
            className={`flex gap-x-4 rounded-r-lg border-l-4 px-2 py-4 font-semibold text-dark-blue hover:bg-primary-blue hover:bg-opacity-10 hover:transition-all`}
          >
            <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
            <p className="my-auto">Logout</p>
          </button>
        </div>
      </ul>
    </aside>
  );
}
