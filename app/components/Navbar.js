import React from "react";
import Link from "next/link";
import Search from "./Search";

export default function Navbar({ searchText }) {
  return (
    <header className="bg-black dark:bg-[#120e1d] border-b border-b-[#25212f] sticky top-0 z-20">
      <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold text-white max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
          <Link href="/"> Image Gallery</Link>
        </h1>
        <Search searchText={searchText} />
        <div className="flex items-center justify-center space-x5 gap-2">
          {/* <Link href="/api/auth/signin">Sign In</Link> */}
          <Link
            href="/api/auth/signout"
            className="px-4 py-2 rounded-3xl bg-[#cfcfd2] text-black"
          >
            Sign Out
          </Link>
        </div>
        {/* color for sign in button #cfcfd2 */}
      </nav>
    </header>
  );
}
