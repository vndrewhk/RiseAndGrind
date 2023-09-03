"use client"
import { SessionProvider } from "next-auth/react";
import CareerHome from "./CareerHome";
import Header from "./Header";
import LeetcodeHome from "./LeetcodeHome";
import Homepage from "./homepage";

export default function Home() {
  // homepage
  return (
    <SessionProvider>
      
      <main className="ml-auto mr-auto flex min-h-screen  max-w-[100vw]   flex-col items-center ">
        {/* home section */}
    
        <Homepage></Homepage>
        <LeetcodeHome></LeetcodeHome>
        <CareerHome></CareerHome>
      </main>
    </SessionProvider>
  );
}
