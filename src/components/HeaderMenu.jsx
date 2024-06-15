import React from "react";
import { Yeseva_One } from "next/font/google";
import Navbar from "./Navbar";

const yesevaOne = Yeseva_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function HeaderMenu({ title }) {
  return (
    <header
      className="relative h-60 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')",
      }}
    >
      <Navbar />
      <div
        className="flex h-full items-center justify-center text-center"
        style={yesevaOne.style}
      >
        <h3 className="text-3xl underline underline-offset-4">{title}</h3>
      </div>
    </header>
  );
}
