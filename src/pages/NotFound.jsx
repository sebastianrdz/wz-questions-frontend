import React from "react";
import Warning from "../assets/Warning.png";
import { NavLink, useLocation } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

const NotFound = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  return (
    <div className="h-screen w-screen m-auto p-8 text-center">
      <img src={Warning} alt="img" className="mx-auto w-1/2" />
      <h1 className="text-3xl">404 Error</h1>
      <h2 className="text-xl">
        Oops, the page you are looking for does not exist.
      </h2>

      <NavLink to={from} exact>
        <button className="bg-red-wz-200 text-white rounded-2xl outline-none drop-shadow-md duration-200 h-12 w-64 my-4 hover:bg-red-400">
          <RiArrowLeftLine size={30} className="mx-auto" />
        </button>
      </NavLink>
    </div>
  );
};

export default NotFound;
