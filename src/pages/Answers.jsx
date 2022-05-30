import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { useParams } from "react-router-dom";
import { AnswersComment, AnswersCard, LoadingModal } from "../components";
import axios from "../api/axios";
import userImg from "../assets/user_img.jpeg";
import moment from "moment";
import {
  RiThumbUpLine,
  // RiThumbUpFill,
  RiChat4Line,
  RiUser3Line,
} from "react-icons/ri";
import { useAuth } from "../hooks";

const GETQUESTION_URL = "/questions";
const GETCOMMENTS_URL = "/comment/question";

const Answers = () => {
  const { auth } = useAuth();

  const [toggleLoading, setToggleLoading] = useState(false); //TODO

  const { questionId } = useParams();
  const [question, setQuestion] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      setToggleLoading(true);
      try {
        await axios
          .get(GETQUESTION_URL + "/" + questionId, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            setQuestion(res?.data?.question[0]);
            console.log(res);
          });
      } catch (err) {
        console.log(err);
      }
    };

    const fetchComments = async () => {
      try {
        await axios
          .get(GETCOMMENTS_URL + "/" + questionId, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            setComments(res?.data?.comments);
            // console.log(res);
          });
      } catch (err) {
        console.log(err);
      }
      setToggleLoading(false);
    };

    fetchQuestion();
    fetchComments();
  }, [auth.token, questionId]);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="flex flex-col p-2 pb-0 bg-white w-11/12 mx-auto">
        <div className="flex flex-row items-center mb-1">
          {question.employee_id === 404 ? (
            <RiUser3Line className="w-8 h-8 rounded-full bg-gray-200 p-1 mr-2" />
          ) : (
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={userImg}
              alt="userImage"
            />
          )}
          <p className="text-black text-xs md:text-base text-limit-xl duration-200">
            {question.question_text}
          </p>
        </div>
        <div className="border border-gray-200 mt-auto mb-2" />
        <div className="flex flex-row  items-center">
          <RiThumbUpLine size={20} className="mx-2" />
          <label className="text-xs md:text-sm">
            {question.like_count} Likes
          </label>
          <RiChat4Line size={20} className="mx-2" />
          <label className="text-xs md:text-sm">
            {question.comment_count} Comments
          </label>
          <p className="text-xs text-red-wz-200 ml-auto">
            {moment(
              question?.date_created?.slice(0, 10),
              "YYYY-MM-DD"
            ).fromNow()}
          </p>
        </div>
      </div>
      <div className="h-fit w-11/12 lg:w-10/12 mx-auto mt-2 overflow-auto overscroll-contain p-2 grid grid-cols-1 gap-2 md:gap-4 max-w-7xl">
        {toggleLoading && <LoadingModal />}
        {comments.length > 0
          ? comments?.map((comment) => <AnswersCard data={comment} />)
          : "Be the first to comment!"}
      </div>
      <div className="mt-auto">
        <AnswersComment questionId={questionId} />
      </div>
    </div>
  );
};

export default Answers;
