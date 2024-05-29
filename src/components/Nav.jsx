import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger, cross } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="padding-x py-10 absolute z-20 w-full">
      {/* Logo */}
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        {/* Links */}
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="font-montserrat font-semibold max-lg:hidden">
          <h2>Sign in / Explore now</h2>
        </div>

        <div
          className="hidden max-lg:block cursor-pointer transition transform ease-in-out delay-150 duration-300 z-40 fixed right-10 top-5 "
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? (
            <img src={cross} alt="cross" width={25} height={25} />
          ) : (
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          )}
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      >
        <div
          className={`drawer fixed top-0 left-0 w-full h-1/3 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-4 mt-4">
            {navLinks.map((items) => (
              <li key={items.label}>
                <a
                  href={items.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {items.label}
                </a>
              </li>
            ))}
            <div className="font-montserrat font-semibold ">
            <h2>Sign in / Explore now</h2>
          </div>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Nav;
