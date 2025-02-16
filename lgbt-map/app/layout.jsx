import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./Providers";

// const inter = Inter({ subsets: ["latin"] });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pink-100`}>
              <NextAuthProvider>
                  <div className="max-w-3xl mx-auto">
                    <Navbar />
                    {children}
                  </div>
                </NextAuthProvider>
      </body>
    </html>
  );
}