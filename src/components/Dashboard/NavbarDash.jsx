import React from "react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function NavbarDash() {
  return (
    <nav className="bg-dark-blue flex justify-between text-white">
      <div className="my-auto px-5 py-3">
        <button>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <button className="flex items-center justify-center gap-x-1 px-2 transition-all">
        <UserCircleIcon className="h-6 w-6" />
        <p>Mahdy Mubasyir</p>
      </button>
      {/* <div className="my-auto">
        <button className="flex gap-x-1 bg-gray-200 px-2 transition-all hover:bg-opacity-20">
          <UserCircleIcon className="h-6 w-6" />
          <p>Mahdy Mubasyir</p>
        </button>
      </div> */}
    </nav>
  );
}
