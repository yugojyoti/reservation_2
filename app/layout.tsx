import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resturant booking Apps",
  description: "A Booking apps for Restuarant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-200 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            <Navbar />

            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
