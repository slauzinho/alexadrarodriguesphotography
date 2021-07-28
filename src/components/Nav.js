import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../../static/alexis-logo.png"
import MiniLogo from "../../static/mini-logo.png"
import CustomerChat from "./CustomerChat"

export default function Nav() {
  const [menuVisibility, setMenuVisibility] = useState(false)
  return (
    <nav>
      <ul className="flex justify-between px-4 py-4">
        <li>
          <Link to="/">
            <img src={Logo} className="w-64 md:mt-4" alt="logo" />
          </Link>
        </li>
        <div className="hidden md:flex">
          <li className="mr-8">
            <Link
              to="/"
              className="title md:font-title md:text-3xl"
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li className="mr-8">
            <Link
              to="/batizados"
              className="title md:font-title md:text-3xl"
              role="menuitem"
            >
              Batizados
            </Link>
          </li>
          <li className="mr-8">
            <Link
              to="/lifestyle"
              className="title md:font-title md:text-3xl"
              role="menuitem"
            >
              Lifestyle
            </Link>
          </li>
          <li className="mr-8">
            <Link
              to="/newborn-and-babies"
              className="title md:font-title md:text-3xl"
              role="menuitem"
            >
              Newborn & Babies
            </Link>
          </li>
          <li>
            <Link
              to="/newly-mom"
              className="md:font-title md:text-3xl"
              role="menuitem"
            >
              Newly Mom
            </Link>
          </li>
          <li className="mr-8">
            <Link
              to="/smash-the-cake"
              className="md:font-title md:text-3xl"
              role="menuitem"
            >
              Smash The Cake
            </Link>
          </li>
          <li className="mr-8">
            <Link
              to="/weddings"
              className="md:font-title md:text-3xl"
              role="menuitem"
            >
              Weddings
            </Link>
          </li>
        </div>
        <div className="block md:hidden">
          <button
            aria-label="open menu"
            onClick={() => setMenuVisibility(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {menuVisibility ? (
            <div
              xShow="mobileMenuOpen"
              class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
            >
              <div class="rounded-lg shadow-lg">
                <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                  <div class="pt-5 pb-6 px-5 space-y-6">
                    <div class="flex items-center justify-between">
                      <div>
                        <img
                          className="w-auto h-8"
                          src={MiniLogo}
                          alt="small logo"
                        />
                      </div>
                      <div class="-mr-2">
                        <button
                          aria-label="close menu"
                          onClick={() => setMenuVisibility(false)}
                          type="button"
                          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                          <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <nav class="grid gap-y-8">
                        <Link
                          onClick={() => setMenuVisibility(false)}
                          to="/"
                          class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <div class="text-base leading-6 font-medium text-gray-900">
                            Home
                          </div>
                        </Link>
                        <Link
                          onClick={() => setMenuVisibility(false)}
                          to="/newborn-and-babies"
                          class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <div class="text-base leading-6 font-medium text-gray-900">
                            Newborn & Babies
                          </div>
                        </Link>
                        <Link
                          onClick={() => setMenuVisibility(false)}
                          to="/lifestyle"
                          class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <div class="text-base leading-6 font-medium text-gray-900">
                            Lifestyle
                          </div>
                        </Link>
                        <Link
                          onClick={() => setMenuVisibility(false)}
                          to="/smash-the-cake"
                          class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <div class="text-base leading-6 font-medium text-gray-900">
                            Smash The Cake
                          </div>
                        </Link>
                        <Link
                          onClick={() => setMenuVisibility(false)}
                          to="/weddings"
                          class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <div class="text-base leading-6 font-medium text-gray-900">
                            Weddings
                          </div>
                        </Link>
                        <Link
                          onClick={() => setMenuVisibility(false)}
                          to="/newly-mom"
                          class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <div class="text-base leading-6 font-medium text-gray-900">
                            Newly Mom
                          </div>
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </ul>
      <CustomerChat />
    </nav>
  )
}
