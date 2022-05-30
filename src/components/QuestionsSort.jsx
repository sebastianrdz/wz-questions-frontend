import React, { useState, useCallback } from "react";
import { RiArrowLeftSLine, RiSortAsc, RiCloseFill } from "react-icons/ri";

const QuestionsSort = ({ setToggleSort }) => {
  const [toggleDateX, setToggleDateX] = useState(false);
  const [toggleLikesX, setToggleLikesX] = useState(false);
  const [toggleViewsX, setToggleViewsX] = useState(false);

  const handleBack = useCallback(
    (event) => {
      setToggleSort(false);
    },
    [setToggleSort]
  );

  const handleChange = (num) => {
    if (num === 1) {
      setToggleDateX(true);
      setToggleLikesX(false);
      setToggleViewsX(false);
    } else if (num === 2) {
      setToggleDateX(false);
      setToggleLikesX(true);
      setToggleViewsX(false);
    } else if (num === 3) {
      setToggleDateX(false);
      setToggleLikesX(false);
      setToggleViewsX(true);
    } else {
      console.log("invalid num");
    }
  };

  return (
    <div className="h-96 w-56 bg-red-wz-gr p-4 rounded-l-3xl flex flex-col slide-left drop-shadow-lg focus:drop-shadow-md">
      <div className="flex flex-row mb-2 items-center">
        {/* back Arrow & Title */}
        <RiArrowLeftSLine
          size={40}
          onClick={handleBack}
          className="border rounded-full p-1 mr-4 bg-white text-red-wz-200 cursor-pointer focus:drop-shadow-md"
        />
        <h1 className="text-white text-2xl font-bold tracking-wide">Sort</h1>
      </div>

      <div
        className={
          toggleDateX
            ? "flex flex-row items-center px-2 my-0.5 py-1 rounded-2xl cursor-pointer bg-red-400"
            : "flex flex-row items-center px-2 my-0.5 py-1 rounded-2xl cursor-pointer hover:bg-red-400"
        }
      >
        <button
          onClick={() => handleChange(1)}
          className="flex flex-row items-center w-36"
        >
          <RiSortAsc size={22} className=" mr-2 text-white" />
          <h1 className="text-white font-bold tracking-wide text-lg">Date</h1>
        </button>
        <RiCloseFill
          onClick={() => setToggleDateX(false)}
          size={22}
          className={
            toggleDateX ? "mr-2 text-white ml-auto cursor-pointer" : "hidden"
          }
        />
      </div>

      <div
        className={
          toggleLikesX
            ? "flex flex-row items-center px-2 my-0.5 py-1 rounded-2xl cursor-pointer bg-red-400"
            : "flex flex-row items-center px-2 my-0.5 py-1 rounded-2xl cursor-pointer hover:bg-red-400"
        }
      >
        <button
          onClick={() => handleChange(2)}
          className="flex flex-row items-center w-36"
        >
          <RiSortAsc size={22} className=" mr-2 text-white" />
          <h1 className="text-white font-bold tracking-wide text-lg">Likes</h1>
        </button>
        <RiCloseFill
          onClick={() => setToggleLikesX(false)}
          size={22}
          className={
            toggleLikesX ? "mr-2 text-white ml-auto cursor-pointer" : "hidden"
          }
        />
      </div>

      <div
        className={
          toggleViewsX
            ? "flex flex-row items-center px-2 py-1 my-0.5 rounded-2xl cursor-pointer bg-red-400"
            : "flex flex-row items-center px-2 py-1 my-0.5 rounded-2xl cursor-pointer hover:bg-red-400"
        }
      >
        <button
          onClick={() => handleChange(3)}
          className="flex flex-row items-center w-36"
        >
          <RiSortAsc size={22} className=" mr-2 text-white" />
          <h1 className="text-white font-bold tracking-wide text-lg">Views</h1>
        </button>
        <RiCloseFill
          onClick={() => setToggleViewsX(false)}
          size={22}
          className={
            toggleViewsX ? "mr-2 text-white ml-auto cursor-pointer" : "hidden"
          }
        />
      </div>
    </div>
  );
};

export default QuestionsSort;
