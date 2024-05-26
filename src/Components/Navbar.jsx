import React from 'react';
import Logo from './Logo';
import NavBtn from './Buttons/NavBtn';

export default function Navbar() {
  return (
    <div class="px-5 py-6 navbar justify-between">
      <div className="">
        <Logo colorText="text-Primary" />
      </div>

      {/* login & register btnz */}
      <div className="hidden md:flex order-1">
        <NavBtn
          bg="bg-Primary"
          color="text-white"
          className="px-4 py-1 rounded-lg text-lg transition-all duration-300 hover:scale-110"
        >
          Login
        </NavBtn>
        <NavBtn color="text-Primary" className="px-4 py-1 rounded-lg text-lg">
          Register
        </NavBtn>
      </div>

      {/* menu mobile */}
      <div class="md:hidden">
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
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-Montserrat"
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
            <div className="divider">Explore</div>
            <div>
              <NavBtn
                bg="bg-Primary"
                color="text-white"
                className="px-4 py-1 rounded-lg text-lg transition-all duration-300 hover:scale-110"
              >
                Login
              </NavBtn>
              <NavBtn
                color="text-Primary"
                className="px-4 py-1 rounded-lg text-lg"
              >
                Register
              </NavBtn>
            </div>
          </ul>
        </div>
      </div>

      {/* menu in Tablet & more */}
      <div class="hidden md:flex">
        <ul class="px-1 flex items-center gap-10 font-Montserrat">
          <li className="text-md lg:text-lg 2xl:text-xl relative Navlink text-SubTitle">
            <a href="#21">Home</a>
          </li>
          <li className="text-md lg:text-lg 2xl:text-xl relative Navlink text-SubTitle">
            <a href="#21">About Us</a>
          </li>
          <li className="text-md lg:text-lg 2xl:text-xl relative Navlink text-SubTitle">
            <a href="#21">Products</a>
          </li>
          <li className="text-md lg:text-lg 2xl:text-xl relative Navlink text-SubTitle">
            <a href="#21">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
