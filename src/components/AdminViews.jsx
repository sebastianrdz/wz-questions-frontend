import React, { useCallback, useEffect } from "react";
import {
  RiArrowLeftSLine,
  RiLayoutColumnLine,
  RiLayoutGridLine,
} from "react-icons/ri";
import { useLocalStorage } from "../hooks";

const AdminViews = ({ setToggleView, setViewType }) => {
  const [toggleColumnX, setToggleColumnX] = useLocalStorage(
    "user_col_active",
    false
  );
  const [toggleGridX, setToggleGridX] = useLocalStorage(
    "user_grid_active",
    false
  );

  useEffect(() => {
    toggleColumnX
      ? setViewType(1)
      : toggleGridX
      ? setViewType(2)
      : setViewType(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleColumnX, toggleGridX]);

  const handleBack = useCallback(
    (event) => {
      setToggleView(false);
    },
    [setToggleView]
  );

  const handleChange = (num) => {
    if (num === 1) {
      setToggleColumnX(true);
      setToggleGridX(false);
    } else if (num === 2) {
      setToggleColumnX(false);
      setToggleGridX(true);
    } else {
      console.log("invalid num");
    }
  };

  return (
    <div className="h-96 w-56 bg-red-wz-gr p-4 rounded-l-3xl flex duration-500 slide-left flex-col focus:drop-shadow-md">
      <div className="flex flex-row mb-2 items-center">
        {/* back Arrow & Title */}
        <RiArrowLeftSLine
          size={40}
          onClick={handleBack}
          className="border rounded-full p-1 mr-4 bg-white text-red-wz-200 cursor-pointer focus:drop-shadow-md"
        />
        <h1 className="text-white text-2xl font-bold tracking-wide">View</h1>
      </div>

      <button
        onClick={() => handleChange(1)}
        className={
          toggleColumnX
            ? "flex flex-row items-center px-2 my-0.5 py-1 rounded-2xl cursor-pointer bg-red-400"
            : "flex flex-row items-center px-2 my-0.5 py-1 rounded-2xl cursor-pointer hover:bg-red-400"
        }
      >
        <RiLayoutColumnLine size={22} className=" mr-2 text-white" />
        <h1 className="text-white font-bold tracking-wide text-lg">Column</h1>
      </button>

      <button
        onClick={() => handleChange(2)}
        className={
          toggleGridX
            ? "flex flex-row items-center px-2 my-0.5 py-1 rounded-2xl cursor-pointer bg-red-400"
            : "flex flex-row items-center px-2 my-0.5 py-1 rounded-2xl cursor-pointer hover:bg-red-400"
        }
      >
        <RiLayoutGridLine size={22} className=" mr-2 text-white" />
        <h1 className="text-white font-bold tracking-wide text-lg">Grid</h1>
      </button>
    </div>
  );
};

export default AdminViews;
