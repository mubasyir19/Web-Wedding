import Footer from "@/components/Footer";
import "../globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Enchanting Celebration",
  description: "Turning Love Stories into Timeless Memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <main>{children}</main>
        <div className="h-20"></div>
        <Footer />
      </body>
    </html>
  );
}
