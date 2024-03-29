// Navbar.js
import React from "react";
import HeaderCart from "./HeaderCart";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import UserMenu from "./UserMenu";
import { CartProvider } from "../../Context/CartContext";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none gap-4">
        <ThemeSwitcher />
         {/* using CartProvider */}
          <HeaderCart />
        
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
