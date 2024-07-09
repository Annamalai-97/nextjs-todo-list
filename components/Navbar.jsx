import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between rounded-sm items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold">
        Malai Coding
      </Link>
      <Link href={"/addTopic"} className="bg-white p-2 rounded-sm">
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
