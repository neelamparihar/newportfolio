import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav class="bg-amber-400 border-gray-200 dark:bg-amber-400 dark:text-black">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://neelamnewportfolio.netlify.app/"
          class="flex items-center"
        >
          <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap ">
            Neelam
          </span>
        </a>
        <div class="flex md:order-2">
          <a href="#contact" onclick="toggleMenu()">
            <button
              type="button"
              onclick="window.open('../assets/neelamresume.pdf')"
              class="text-white bg-black hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-white"
            >
              Contact Me
            </button>
          </a>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-amber-400 ">
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4   rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onclick="toggleMenu()"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded bg-amber-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onclick="toggleMenu()"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded bg-amber-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                onclick="toggleMenu()"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded bg-amber-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#certificate"
                class="block py-2 pl-3 pr-4   rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Certification
              </a>
            </li>
            <li>
              <a
                href="#dsa"
                class="block py-2 pl-3 pr-4   rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                DSA-Zone
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
