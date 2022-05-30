import React from "react";
import { RiLoader4Fill } from "react-icons/ri";

const LoadingModal = () => {
  return (
    <div className="m-auto">
      <div className="animate-spin">
        <RiLoader4Fill size={40} />
      </div>
    </div>
  );
};

export default LoadingModal;
