"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  let [authModal, setAuthModal] = useState(false);
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === authenticated) {
      console.log(session);
    }
  }, [session]);
  return (
    <div className="outline-1 outline-black outline min-h-[10vh] p-2 sm:p-1  lg:p-3 max-h-[10vh] flex flex-row justify-between">
      <Link href="/" className="min-h-[100%] flex select-none">
        {/* <a className="min-h-[100%] flex"> */}
        <img
          src="/logo.png"
          className="cursor-pointer object-contain transition hover:scale-110"
        ></img>
      </Link>
      <div className="flex items-center lg:gap-x-4">
        <Link
          href="/leetcode"
          className="invisible lg:visible  hover:outline outline-2 outline-black p-2"
        >
          LeetCode
        </Link>
        <Link
          href="/career"
          className="invisible lg:visible  hover:outline outline-2 outline-black p-2"
        >
          Career
        </Link>
        {/* <Link href="/" className="invisible lg:visible">Resources</Link> */}
        {status === "authenticated" ? (
          <>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <Link
            href="/"
            className="invisible lg:visible   hover:outline outline-2 outline-black p-2"
            onClick={() => setAuthModal(!authModal)}
          >
            Log in
          </Link>
        )}
        <Link href="/" className="visible lg:invisible">
          <MenuIcon />
        </Link>
      </div>
      {authModal && (
        <AuthModal
          authModal={authModal}
          setAuthModal={setAuthModal}
        ></AuthModal>
      )}
    </div>
  );
}

export default Header;
