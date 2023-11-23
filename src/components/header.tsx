"use client";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import ThemeSwitcher from "./themeProvider/themeSwitcher";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <nav className="header fixed top-0 backdrop-blur-sm z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center space-x-3">
            <span className="self-center hover:text-lime-300 text-2xl font-semibold whitespace-nowrap ">
              PS
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            <button
              onClick={() => setShow(!show)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-lime-300"
            >
              <TiThMenu size={25} color={"#84cc16"} />
            </button>
          </div>
          <div
            className={`items-center justify-between  ${show ? "block" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="nav-links flex flex-col p-4 dark:bg-transparent sm:dark:bg-slate-950 sm:bg-slate-50 dark:text-slate-50 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  href="#aboutme"
                  className="block py-2 px-3 rounded md:p-0"
                  aria-current="page"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="block py-2 px-3 rounded md:p-0">
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="block py-2 px-3 rounded md:p-0"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="block py-2 px-3 rounded md:p-0"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-2 px-3 rounded md:p-0"
                >
                  Contact
                </Link>
              </li>
              <li className="hover:after:hidden xl:ml-5 md:ml-5">
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
