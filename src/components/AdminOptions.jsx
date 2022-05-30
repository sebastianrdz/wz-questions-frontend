import React from "react";
import { RiCheckboxMultipleLine, RiEyeLine } from "react-icons/ri";

const AdminOptions = ({ setToggleSelectAll, setToggleView }) => {
  const handleChange = (num) => {
    if (num === 1) {
      setToggleSelectAll(true);
      setToggleView(false);
    } else if (num === 2) {
      setToggleSelectAll(false);
      setToggleView(true);
    } else {
      console.log("invalid num");
      setToggleSelectAll(false);
      setToggleView(false);
    }
  };

  return (
    <div className="flex flex-col space-y-5">
      <RiCheckboxMultipleLine
        size={50}
        onClick={() => handleChange(1)}
        className="bg-red-wz-gr text-white p-4 rounded-full drop-shadow-lg cursor-pointer duration-200 hover:p-3"
      />
      <RiEyeLine
        size={50}
        onClick={() => handleChange(2)}
        className="bg-white text-red-wz-200 p-4 rounded-full drop-shadow-lg cursor-pointer duration-200 hover:p-3"
      />
    </div>
  );
};

export default AdminOptions;
