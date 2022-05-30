import React, { useState } from "react";
import userImg from "../assets/user_img.jpeg";
import { RiCheckDoubleLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import moment from "moment";
import axios from "../api/axios";
import { useAuth } from "../hooks";

const UPDATECOMMENT_URL = "admin/";

const AnswersCard = (data) => {
  const { auth } = useAuth();
  const [showmore, setShowmore] = useState(false);
  // console.log(data);

  const updateComment = async () => {
    if (auth?.info?.is_admin) {
      try {
        await axios
          .put(
            UPDATECOMMENT_URL + data.data.comment_id + "/answer",
            { is_answer: !data?.data?.is_answer },
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
    }
  };

  return (
    <div className="w-full flex flex-col px-2 py-1">
      <div className="flex flex-row items-center">
        {data.data.is_anonymous ? (
          <RiUser3Line className="w-8 h-8 rounded-full bg-gray-200 p-1 mr-2 hidden sm:flex" />
        ) : (
          <img
            className="w-8 h-8 rounded-full mr-2 hidden sm:flex"
            src={userImg}
            alt="userImage"
          />
        )}
        <div
          className={
            data.data.is_answer
              ? "bg-gray-50 w-full flex flex-col rounded-2xl drop-shadow-lg px-4 py-2 border-2 border-red-500"
              : "bg-gray-50 w-full flex flex-col rounded-2xl drop-shadow-lg px-4 py-2"
          }
        >
          <div
            className={
              data.data.is_answer
                ? "flex flex-row items-center text-red-wz-200"
                : "hidden"
            }
          >
            <RiCheckDoubleLine size={25} />
            <p className="text-xl">Answer</p>
          </div>
          <p
            onClick={updateComment}
            className={
              showmore
                ? "text-black text-base cursor-pointer"
                : "text-black text-base text-limit cursor-pointer"
            }
          >
            {data.data.comment_text}
          </p>
          <div className="flex flex-row items-center mt-2 cursor-pointer">
            {showmore ? (
              <p
                onClick={() => setShowmore(false)}
                className="text-red-wz-200 text-sm"
              >
                Show Less
              </p>
            ) : (
              <p
                onClick={() => setShowmore(true)}
                className="text-red-wz-200 text-sm"
              >
                Show More
              </p>
            )}
            <p className="text-black text-xs ml-auto">
              {moment(
                data.data.date_created.slice(0, 10),
                "YYYY-MM-DD"
              ).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswersCard;
