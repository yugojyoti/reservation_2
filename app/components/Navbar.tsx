"use client";

import Link from "next/link";
import React from "react";
import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";

const Navbar = () => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        {" "}
        Food<span className="text-cyan-700 font-bold">Point</span>{" "}
      </Link>
      <div>
        <div className="flex mr-4">
          <SigninModal />
          <SignupModal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
