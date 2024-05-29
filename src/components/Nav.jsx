import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
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

        <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
