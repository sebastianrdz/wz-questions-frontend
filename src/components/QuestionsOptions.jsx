import React from "react";
import {
  RiAddFill,
  RiFilterLine,
  RiArrowUpDownLine,
  RiEyeLine,
} from "react-icons/ri";

const QuestionsOptions = ({
  setToggleAdd,
  setToggleFilter,
  setToggleSort,
  setToggleView,
}) => {
  const handleChange = (num) => {
    if (num === 1) {
      setToggleAdd(true);
      setToggleFilter(false);
      setToggleSort(false);
      setToggleView(false);
    } else if (num === 2) {
      setToggleAdd(false);
      setToggleFilter(true);
      setToggleSort(false);
      setToggleView(false);
    } else if (num === 3) {
      setToggleAdd(false);
      setToggleFilter(false);
      setToggleSort(true);
      setToggleView(false);
    } else if (num === 4) {
      setToggleAdd(false);
      setToggleFilter(false);
      setToggleSort(false);
      setToggleView(true);
    } else {
      console.log("invalid num");
      setToggleAdd(false);
      setToggleFilter(false);
      setToggleSort(false);
      setToggleView(false);
    }
  };

  return (
    <div className="flex flex-col space-y-5">
      <RiAddFill
        size={50}
        onClick={() => handleChange(1)}
        className="bg-red-wz-gr text-white p-4 rounded-full drop-shadow-lg cursor-pointer duration-200 hover:p-3"
      />
      <RiFilterLine
        size={50}
        onClick={() => handleChange(2)}
        className="bg-white text-red-wz-200 p-4 rounded-full drop-shadow-lg cursor-pointer duration-200 hover:p-3"
      />
      <RiArrowUpDownLine
        size={50}
        onClick={() => handleChange(3)}
        className="bg-white text-red-wz-200 p-4 rounded-full drop-shadow-lg cursor-pointer duration-200 hover:p-3"
      />
      <RiEyeLine
        size={50}
        onClick={() => handleChange(4)}
        className="bg-white text-red-wz-200 p-4 rounded-full drop-shadow-lg cursor-pointer duration-200 hover:p-3"
      />
    </div>
  );
};

export default QuestionsOptions;
