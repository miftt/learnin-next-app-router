"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex bg-gray-800 py-3 px-5 justify-between">
      <div className="flex">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex text-white ml-5">
        <Link href={"/"}>
          <li className={`mr-3 ${pathname === "/" ? "text-blue-300" : ""} cursor-pointer hover:text-blue-300 transition`}>Home</li>
        </Link>
        <Link href={"/about"}>
          <li className={`mr-3 ${pathname === "/about" ? "text-blue-300" : ""} cursor-pointer hover:text-blue-300 transition`}>About</li>
        </Link>
        <Link href={"/about/profile"}>
          <li className={`mr-3 ${pathname === "/about/profile" ? "text-blue-300" : ""} cursor-pointer hover:text-blue-300 transition`}>Profile</li>
        </Link>
        <Link href={"/products"}>
          <li className={`mr-3 ${pathname === "/products" ? "text-blue-300" : ""} cursor-pointer hover:text-blue-300 transition`}>Products</li>
        </Link>
      </ul>
      </div>
      <div>
        <button
         className="bg-white rounded-md px-3 text-sm h-7 hover:bg-slate-300 transition"
         onClick={() => router.push("/login")}
         >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
