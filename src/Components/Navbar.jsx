import React from 'react';

export default function Navbar() {
  return (
    <div class="navbar p-5">
      <div className="navbar-start">
        <a href="#55sv" className="flex items-center gap-2">
          <img src="./images/logo.svg" className="w-10" alt="nike logo" />
          <span className="text-3xl text-Primary">Nike</span>
        </a>
      </div>

      {/* menu mobile */}
      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
          >
            <li>
              <a className="text-lg" href="#24v">
                Home
              </a>
            </li>
            <li>
              <a className="text-lg" href="#24v">
                About Us
              </a>
            </li>
            <li>
              <a className="text-lg" href="#24v">
                Our Products
              </a>
            </li>
            <li>
              <a className="text-lg" href="#24v">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* menu in Tablet & more */}
      <div class="hidden navbar-center lg:flex lg:navbar-center">
        <ul class="px-1 flex items-center gap-10">
          <li className="text-lg">
            <a href="#21">Home</a>
          </li>
          <li className="text-lg">
            <a href="#21">About Us</a>
          </li>
          <li className="text-lg">
            <a href="#21">Products</a>
          </li>
          <li className="text-lg">
            <a href="#21">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
