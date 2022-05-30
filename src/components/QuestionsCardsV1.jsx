import userImg from "../assets/user_img.jpeg";
import moment from "moment";
import { useAuth } from "../hooks";
import {
  RiThumbUpLine,
  // RiThumbUpFill,
  RiChat4Line,
  RiUser3Line,
} from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";

const LIKE_URL = "/like";

const QuestionsCardsV1 = ({
  input,
  commentCount,
  likeCount,
  dateCreated,
  userId,
  questionId,
}) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || `/questions/${questionId}`;
  const newDate = moment(dateCreated?.slice(0, 10), "YYYY-MM-DD").fromNow();

  function goToQuestion() {
    navigate(from, { replace: true });
  }

  // useEffect(() => {
  //   const getLikes = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await axios
  //         .get(LIKE_URL + "/employee/" + auth.info.employee_id, {
  //           header: {
  //             Authorization: `Bearer ${auth.token}`,
  //           },
  //         })
  //         .then((res) => {
  //           console.log(res);
  //         });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getLikes();
  // }, []);

  // eslint-disable-next-line no-unused-vars
  const makeLike = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          LIKE_URL,
          {
            employee_id: auth.info.employee_id,
            question_id: questionId,
            username: auth.info.username,
          },
          {
            header: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    } catch (err) {}
  };

  // eslint-disable-next-line no-unused-vars
  const removeLike = async (e) => {
    e.preventDefault();
    try {
      await axios
        .delete(
          LIKE_URL,
          {
            employee_id: auth.info.employee_id,
            question_id: questionId,
          },
          {
            header: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    } catch (err) {}
  };

  return (
    <div className="flex flex-col p-2 bg-white rounded-2xl border border-gray-100 duration-0 drop-shadow-md">
      <div
        onClick={goToQuestion}
        className="flex flex-row items-center mb-1 cursor-pointer"
      >
        {userId === 404 ? (
          <RiUser3Line className="w-8 h-8 rounded-full bg-gray-200 p-1 mr-2 hidden sm:flex" />
        ) : (
          <img
            className="w-8 h-8 rounded-full mr-2 hidden sm:flex"
            src={userImg}
            alt="userImage"
          />
        )}
        <p className="text-black text-xs md:text-base text-limit-xl duration-200">
          {input}
        </p>
      </div>
      <div className="border border-gray-200 mt-auto mb-2" />
      <div className="flex flex-row  items-center">
        <RiThumbUpLine size={20} className="mx-2 cursor-pointer" />
        <label className="text-sm hidden md:flex">{likeCount} </label>
        <RiChat4Line size={20} className="hidden md:flex mx-2" />
        <label className="text-sm hidden md:flex">{commentCount} </label>
        <p className="hidden sm:flex text-xs text-red-wz-200 ml-auto">
          {newDate}
          {/* {dateCreated.slice(11, 19)} */}
        </p>
      </div>
    </div>
  );
};

export default QuestionsCardsV1;
