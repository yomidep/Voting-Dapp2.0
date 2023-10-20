"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/arkade.jpeg";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#0e1c25] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-0">
        <Link
          href={"/"}
          className="text-5xl text-white font-semibold items-center justify-center flex"
        >
          <Image src={logo} className="w-20 p-3 cursor-pointer rounded-full" />
          <p className="text-white px-3 text-lg">PowerArk</p>
        </Link>
        {/* ========== for mobile menu =========== */}
        <div className="mobile-menu block ">
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text--white"
          >
            {" "}
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
