"use client";

import React, { useEffect, useState } from "react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import { jwtDecode } from "jwt-decode";

export default function NavbarDash() {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("Token => ", token);
    // console.log("Real Token => ", atob(token));

    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const adminFromPayload = payload;
      setAdmin(adminFromPayload);
    }
  }, []);
  return (
    <nav className="flex justify-between bg-dark-blue text-white">
      <div className="my-auto px-5 py-3">
        <button>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <button className="flex items-center justify-center gap-x-1 px-2 transition-all">
        <UserCircleIcon className="h-6 w-6" />
        <p>{admin.username}</p>
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
