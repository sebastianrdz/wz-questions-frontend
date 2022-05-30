import React from "react";
import { SearchBar, Navbar } from "../components";
import logo from "../assets/wizeline_logo.png";

const Search = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-img">
      <Navbar />
      <div className="my-auto">
        <img
          src={logo}
          alt="logo"
          className="w-40 mb-4 duration-200 md:w-64 mx-auto"
        />
        <SearchBar />
        <p className="text-white text-center mt-36 lg:mt-64">
          Browse Questions <br /> v
        </p>
      </div>
    </div>
  );
};

export default Search;
