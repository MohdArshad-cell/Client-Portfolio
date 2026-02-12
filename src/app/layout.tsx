import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Professional font for architects
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth"> {}
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}