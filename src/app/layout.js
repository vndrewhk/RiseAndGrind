'use client'
import { SessionProvider } from "next-auth/react";
import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono">
        <SessionProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </SessionProvider>
      </body>
    </html>
  );
}
