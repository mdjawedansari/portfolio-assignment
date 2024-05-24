// components/Header.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Drawer from "./Drawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("hello");
  };

  return (
    <>
      <header className="bg-gray-800 text-white md:p-4 w-full fixed">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-40 md:w-80 md:h-20 flex items-center">
            <Link href="#">
            <Image width={500} height={100} src="/logo/logo.svg" /></Link>
          </div>
          <div className="sm:hidden pr-8 ">
            {isOpen && isOpen ? (
              <RxCross2 onClick={() => setIsOpen(false)} className={` w-10 h-10 p-2 hover:bg-gray-700 hover:text-gray-400  hover:rounded`} />
            ) : (
              <CiMenuFries onClick={toggleDropdown} className="w-10 h-10 p-2 hover:bg-gray-700 hover:text-gray-400 hover:rounded" />
            )}
          </div>
          <nav className="hidden sm:flex">
            <ul className="flex pr-20 gap-8 space-x-4">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isOpen && <Drawer setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
