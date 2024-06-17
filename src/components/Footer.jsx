import { Bilbo_Swash_Caps, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const bilboSwashCaps = Bilbo_Swash_Caps({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer
      className="flex h-fit flex-col justify-around bg-[#424242] px-5 py-4 text-white md:flex-row lg:px-8"
      style={poppins.style}
    >
      <Link href="/" className="my-auto text-center">
        <p className="text-xl italic" style={bilboSwashCaps.style}>
          Enchanting Celebration
        </p>
        <p className="text-[6px]">
          Turning Love Stories into Timeless Memories.
        </p>
      </Link>
      <div className="mx-auto mt-4 flex flex-col gap-x-8 text-center text-sm md:my-auto md:flex-row">
        <Link href="#">About Us</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">FAQ</Link>
      </div>
      <div className="mt-4 text-center md:my-auto">
        <p className="text-xs">Social Media :</p>
        <div className="flex justify-center gap-x-4">
          {/* <Link href="#" className="cursor-pointer">
            <Image
              src="/images/tokopedia.png"
              height={25}
              width={24}
              alt="tokopedia"
              className=""
            />
          </Link> */}
          {/* <Link href="#" className="cursor-pointer">
            <Image
              src="/images/shopee.png"
              height={25}
              width={24}
              alt="tokopedia"
              className=""
            />
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
