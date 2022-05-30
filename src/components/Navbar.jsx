import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../assets/wizeline_logo.png";
import userImg from "../assets/user_img.jpeg";
import { Profile } from "../components";
import { useAuth } from "../hooks";

const Menu = () => {
  const { auth } = useAuth();
  return (
    <>
      <p>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </p>
      <p>
        <NavLink to="/questions" exact>
          Questions
        </NavLink>
      </p>
      <p>
        <NavLink to="/about" exact>
          About
        </NavLink>
      </p>
      <p>
        <NavLink to="/contact" exact>
          Contact
        </NavLink>
      </p>
      {auth.info.is_admin && (
        <p>
          <NavLink to="/admin" exact>
            Admin
          </NavLink>
        </p>
      )}
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);

  return (
    <div className="flex align-middle p-4 z-30">
      <img src={logo} alt="logo" className="w-40" />
      <div className="flex justify-end align-middle items-center flex-1">
        <div className="hidden flex-1 justify-end flex-row align-middle navbar-p md:flex ">
          <Menu />
        </div>
        <div className="flex justify-end items-center">
          {toggleUserMenu ? (
            <button type="button">
              <img
                className="w-10 rounded-full"
                src={userImg}
                alt="logo"
                onClick={() => setToggleUserMenu(false)}
              />
            </button>
          ) : (
            <button type="button">
              <img
                className="w-10 rounded-full"
                src={userImg}
                alt="logo"
                onClick={() => setToggleUserMenu(true)}
              />
            </button>
          )}
          {toggleUserMenu && <Profile />}
        </div>
        <div className="ml-4 flex relative justify-end md:hidden">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="flex flex-col items-end justify-end align-middle bg-white p-2 right-0 absolute top-10 rounded-xl drop-shadow-lg navbar-p scale-up-center">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
