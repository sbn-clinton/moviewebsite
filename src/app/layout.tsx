import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// ${geistSans.variable} ${geistMono.variable} antialiased
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "SBN Movie Website",
  description: "SBN Movie Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-[#1A1716] text-slate-200`}>
        <div className="flex flex-col md:flex-row  min-h-screen justify-between gap-4">
          <SideBar />
          <NavBar />
          <div className="flex-grow md:max-w-[80%]  md:ml-auto mt-16 md:mt-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
