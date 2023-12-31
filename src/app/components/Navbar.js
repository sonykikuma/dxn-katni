"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
//import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/logodxn.png" alt="/" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b  border-red-400">
              <Link href="/" className="">
                Home
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b border-red-400">
              <Link href="https://www.dxn2u.com/about/">About </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-red-400">
              {" "}
              <Link href="https://www.dxn2u.com/product/">Products </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-red-400">
              <Link href="/contact">Contact </Link>
            </li>
          </ul>

          {/*hamburger icon*/}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
         
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/*side drawer*/}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src="/logodxn.png" width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                {" "}
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4  text-orange-800">
                {" "}
                &quot;Health is Wealth&quot; Healthy People, Healthy Nation
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
                 ̰
              </Link>
              <Link href="https://www.dxn2u.com/about/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="https://www.dxn2u.com/product/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Products
                </li>
              </Link>
              <Link href="/contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {" "}
                let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/company/dxn-limited/?originalSubdomain=au"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400
             p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaLinkedinIn />
                  </div>
                </Link>

                <Link
                  href=" https://twitter.com/i/flow/login?redirect_after_login=%2Fdxnwide%3Flang%3Den"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400
             p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaTwitter />
                  </div>
                </Link>

                <Link
                  href="https://www.dxnindia.in

                  "
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400
             p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>

                <Link
                  href="https://www.dxn2u.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400
             p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </nav>
  );
};

export default Navbar;
