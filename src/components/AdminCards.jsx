import React from "react";
import userImg from "../assets/user_img.jpeg";
import axios from "../api/axios";
import { RiCheckboxCircleFill, RiUser3Line } from "react-icons/ri";
import { useAuth } from "../hooks";

const UPDATEUSERS_URL = "/admin";

const AdminCards = ({ name, lastName, username, isAdmin, userId }) => {
  const { auth } = useAuth();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(
          UPDATEUSERS_URL + "/" + userId,
          { is_admin: !isAdmin },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then((res) => {
          // console.log(res);
          window.location.reload(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      onClick={handleUpdate}
      className={
        isAdmin
          ? "flex flex-col p-2 bg-white rounded-2xl border border-red-500 duration-0 drop-shadow-md cursor-pointer"
          : "flex flex-col p-2 bg-white rounded-2xl border border-gray-100 duration-0 drop-shadow-md cursor-pointer pr-6"
      }
    >
      <div className="flex flex-row items-center">
        {userId === 404 ? (
          <RiUser3Line className="w-8 h-8 rounded-full bg-gray-200 p-1 mr-2 hidden sm:flex" />
        ) : (
          <img
            className="w-8 h-8 rounded-full mr-2 hidden sm:flex"
            src={userImg}
            alt="userImage"
          />
        )}
        <div>
          <p className="text-black text-limit duration-200 text-sm font-bold md:text-lg ">
            {name} {lastName}
          </p>
          <p className="text-black text-limit duration-200 text-xs md:text-base">
            {username}
          </p>
        </div>
        {isAdmin ? (
          <RiCheckboxCircleFill className="ml-auto text-red-wz-200" />
        ) : (
          <RiCheckboxCircleFill className="ml-auto text-red-wz-200 hidden " />
        )}
      </div>
    </div>
  );
};

export default AdminCards;
