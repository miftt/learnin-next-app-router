"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toCapital from "@/components/toCapital";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const {data:session, status}: {data: any, status:string;} = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-gray-800 py-3 px-5 justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-white">Navbar</h1>
        <ul className={`text-white md:flex md:flex-row space-x-3 ml-5 ${isOpen ? "flex flex-col" : "hidden"}`}>
          <Link href="/">
            <li className={`hover:text-blue-300 transition ${pathname === "/" ? "text-blue-300" : ""}`}>Home</li>
          </Link>
          <Link href="/about">
            <li className={`hover:text-blue-300 transition ${pathname === "/about" ? "text-blue-300" : ""}`}>About</li>
          </Link>
          <Link href="/about/profile">
            <li className={`hover:text-blue-300 transition ${pathname === "/about/profile" ? "text-blue-300" : ""}`}>Profile</li>
          </Link>
          <Link href="/products">
            <li className={`hover:text-blue-300 transition ${pathname === "/products" ? "text-blue-300" : ""}`}>Products</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center">
        {status === 'authenticated' ?(
          <div className="flex">
          <h4 className="text-white mr-5 mt-0.5 ">{toCapital(session?.user?.fullname)}</h4>
          <button
          className="bg-white rounded-md px-3 text-sm h-7 hover:bg-slate-300 transition mr-3"
          onClick={() => signOut()}
        >
          Logout
        </button>
          </div>
        ):
        <button
          className="bg-white rounded-md px-3 text-sm h-7 hover:bg-slate-300 transition mr-3"
          onClick={() => signIn()}
        >
          Login
        </button>}
        <button
          className="md:hidden text-white hover:text-blue-300 transition" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
