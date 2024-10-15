import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="bg-black p-4 flex justify-between items-center text-white text-3xl">
      <div className="font-bold">SUBHAN</div>
      <div className="space-x-4 text-xl ">
        <Link href="/">Home</Link>
        <Link href="/signIn">Sign in</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}

export default NavBar;
