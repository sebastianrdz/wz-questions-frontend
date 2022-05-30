import React, { useState } from "react";
import { useAuth } from "../hooks";
import axios from "../api/axios";
import { RiArrowDropDownFill, RiChat4Line } from "react-icons/ri";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const ADDCOMMENT_URL = "/comment";

const AnswersComment = ({ questionId }) => {
  const { auth } = useAuth();
  const [input, setInput] = useState("");
  const [commentAnonymous, setCommentAnonymous] = useState(false);
  const [toggleCommentModal, setToggleCommentModal] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          ADDCOMMENT_URL,
          {
            employee_id: auth.info.employee_id,
            question_id: questionId,
            comment_text: input,
            is_anonymous: commentAnonymous,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then((res) => {
          window.location.reload(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <RiChat4Line
        onClick={() => setToggleCommentModal(!toggleCommentModal)}
        size={45}
        className={
          toggleCommentModal
            ? "absolute right-3 bottom-36 rounded-full bg-red-wz-gr p-2 text-white drop-shadow-md"
            : "absolute right-3 bottom-3 rounded-full bg-red-wz-gr p-2 text-white drop-shadow-md"
        }
      />
      {toggleCommentModal && (
        <div className="p-3 bg-red-wz-gr flex flex-col rounded-t-3xl w-11/12 mx-auto">
          <GrammarlyEditorPlugin>
            <textarea
              type="text"
              id="input"
              placeholder="Type at least  14 characters..."
              autoComplete="off"
              onChange={(e) => setInput(e.target.value)}
              rows={2}
              required
              className="rounded-xl w-full duration-200 bg-white outline-none border p-2 mb-2"
            />
          </GrammarlyEditorPlugin>
          <div
            onClick={() => setCommentAnonymous(!commentAnonymous)}
            className="flex flex-row w-full items-center"
          >
            <div className="flex flex-row items-center cursor-pointer">
              <p className="text-white text-xs ml-4 hidden sm:flex">
                Comment as:{" "}
              </p>
              {commentAnonymous ? (
                <p className="text-white ml-4 sm:ml-1">Anonymous</p>
              ) : (
                <p className="text-white ml-4 sm:ml-1">
                  {auth.info.employee_name} {auth.info.employee_last_name}
                </p>
              )}
              <RiArrowDropDownFill size={22} className="text-white" />
            </div>
            <button
              onClick={handleSubmit}
              className="ml-auto text-red-wz-200 bg-white py-1 px-3 rounded-full"
            >
              Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswersComment;
