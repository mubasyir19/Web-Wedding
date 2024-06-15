import Navbar from "@/components/Navbar";
import { Bilbo_Swash_Caps, Poppins, Yeseva_One } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const bilboSwashCaps = Bilbo_Swash_Caps({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative">
      <header
        className="relative h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')",
        }}
      >
        <Navbar />
        <section className="flex h-screen items-center justify-center px-8 text-center">
          <div>
            <h1
              className="text-6xl italic md:text-6xl lg:text-7xl xl:text-8xl"
              style={bilboSwashCaps.style}
            >
              Enchanting Celebration
            </h1>
            <p
              className="mt-6 text-sm md:text-base lg:text-xl"
              style={poppins.style}
            >
              Turning Love Stories into Timeless Memories
            </p>
          </div>
        </section>
      </header>
    </main>
  );
}
