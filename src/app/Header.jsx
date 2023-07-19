import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  return (
    <div className="outline-1 outline-black outline min-h-[10vh] p-2 sm:p-1  lg:p-3 max-h-[10vh] flex flex-row justify-between">
      <a className="min-h-[100%] flex">
        <img src="/logo.png" className="cursor-pointer object-contain transition hover:scale-110"></img>
      </a>
      <div className="flex items-center lg:gap-x-4">
        <Link href="/" className="invisible lg:visible">LeetCode</Link>
        <Link href="/" className="invisible lg:visible">Career Development</Link>
        <Link href="/" className="invisible lg:visible">Resources</Link>
        <Link href="/" className="invisible lg:visible">Log in</Link>
        <Link href="/" className="visible lg:invisible">
          <MenuIcon />
        </Link>
      </div>
    </div>
  );
}

export default Header;
