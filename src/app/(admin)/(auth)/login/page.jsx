"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      // console.log("Data => ", data.data);

      if (data != null || !undefined) {
        Swal.fire({
          title: "Sign in successfully",
          icon: "success",
        });

        // console.log("TOKEN => ", data.data);

        const tokenBase64 = btoa(data.data);
        localStorage.setItem("token", tokenBase64);
        router.push("/dashboard");
      } else {
        Swal.fire({
          title: "Failed Sign in",
          icon: "error",
          text: data.message,
        });
      }
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  return (
    <div className="flex h-screen" style={poppins.style}>
      <div className="w-1/2 bg-login bg-cover bg-center">
        <div className="h-full w-full bg-black bg-opacity-50"></div>
      </div>
      <div className="relative flex w-1/2 items-center justify-center">
        <div className="">
          <h1 className="text-center text-3xl font-semibold">Login</h1>
          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Type username"
                className="mt-2 w-full rounded-lg border-2 border-gray-400 px-4 py-2 text-black"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Type password"
                className="mt-2 w-full rounded-lg border-2 border-gray-400 px-4 py-2 text-black"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 py-3 text-sm text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="absolute left-3 top-3">
          <Link href="/" className="text-base text-black underline">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
