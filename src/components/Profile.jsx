import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";

const ClearStorage = async () => {
  await localStorage.clear();
};

const Profile = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  return (
    <div className="px-4 py-2 bg-white flex flex-col rounded-tr-none rounded-3xl drop-shadow-lg content-end items-start absolute mr-4 mt-4 top-10 scale-up-center z-30">
      <p className="text-xl font-normal">
        {auth.info.employee_name} {auth.info.employee_last_name}
      </p>
      <p className="font-light">{auth.info.username}</p>
      <p className={auth.info.is_admin ? "font-light" : "hidden"}>Admin</p>
      <button
        onClick={() => {
          ClearStorage();
          navigate("/startpage", { replace: true });
        }}
        className="text-white bg-red-wz-gr py-1 px-3 rounded-full ml-auto"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
