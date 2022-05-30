import React, { useState, useRef, useCallback, useEffect } from "react";
import userImg from "../assets/user_img.jpeg";
import axios from "../api/axios";
import { useAuth } from "../hooks";
import { RiArrowDropDownFill, RiUser3Line } from "react-icons/ri";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { HoverableDropDown } from "../components";

const ADDQUESTIONS_URL = "/questions";

const QuestionsAsk = ({ setToggleAdd, departments }) => {
  const { auth } = useAuth();

  const errRef = useRef();
  const sucRef = useRef();

  const [input, setInput] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [succesMsg, setSuccessMsg] = useState("");

  const [commentAnonymous, setCommentAnonymous] = useState(false);
  const [departmentOption, setDepartmentOption] = useState(null);

  const handleBack = useCallback(
    (event) => {
      setToggleAdd(false);
    },
    [setToggleAdd]
  );

  useEffect(() => {
    console.log(departmentOption);
  }, [departmentOption]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          ADDQUESTIONS_URL,
          {
            employee_id: auth.info.employee_id,
            department_id: departmentOption !== null ? departmentOption : null,
            question_text: input,
            is_anonymous: commentAnonymous,
            ask_employee_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then((res) => {
          setSuccessMsg("Question added");
          window.location.reload(false);
        });
    } catch (err) {
      setErrMsg("Error");
      console.log(err);
    }
  };

  return (
    <GrammarlyEditorPlugin className="h-screen w-screen bg-gray-tr flex justify-center  z-30 absolute">
      <div className="flex flex-col p-6 bg-white drop-shadow-md w-screen duration-500 mx-4 md:mx-32 lg:mx-52 xl:mx-72 rounded-2xl m-auto">
        <p
          ref={errRef}
          aria-live="assertive"
          className={
            errMsg
              ? "flex justify-center font-bold text-sm text-red-600"
              : "hidden"
          }
        >
          {errMsg}
        </p>
        <p
          ref={sucRef}
          aria-live="assertive"
          className={
            succesMsg
              ? "flex justify-center font-bold text-sm text-green-600"
              : "hidden"
          }
        >
          {succesMsg}
        </p>
        <div className="flex flex-row items-center">
          {commentAnonymous ? (
            <RiUser3Line className="w-8 h-8 rounded-full bg-gray-200 p-1 mr-2 hidden sm:flex" />
          ) : (
            <img
              className="w-8 h-8 rounded-full mr-2 hidden sm:flex"
              src={userImg}
              alt="userImage"
            />
          )}
          <div className="flex flex-col">
            <p className="text-black">You are asking as:</p>
            <div
              onClick={() => setCommentAnonymous(!commentAnonymous)}
              className="flex flex-row items-center cursor-pointer"
            >
              {commentAnonymous ? (
                <p className="text-red-wz-200">Anonymous</p>
              ) : (
                <p className="text-red-wz-200">
                  {auth.info.employee_name} {auth.info.employee_last_name}
                </p>
              )}
              <RiArrowDropDownFill size={22} className="text-red-wz-200" />
            </div>
          </div>
        </div>
        {/* <GrammarlyEditorPlugin> */}
        <textarea
          type="text"
          id="input"
          placeholder="Type at least  14 characters..."
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
          rows={2}
          className="bg-white rounded-xl outline-none border duration-200  w-full px-4 py-2 my-4 hover:drop-shadow-md focus:drop-shadow-md"
        />
        {/* </GrammarlyEditorPlugin> */}
        <div className="flex flex-row">
          {/* Dropdown menues */}

          <HoverableDropDown
            departments={departments}
            setDepartmentOption={setDepartmentOption}
          />
        </div>
        <div className="flex flex-row mt-8 mr-10">
          <button
            onClick={handleBack}
            className=" text-red-wz-200 rounded-full outline-none  duration-200 h-9 w-20 ml-auto hover:text-lg"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-red-wz-gr text-white rounded-full outline-none drop-shadow-md duration-200 h-9 w-20 ml-4 hover:text-lg"
          >
            Ask
          </button>
        </div>
      </div>
    </GrammarlyEditorPlugin>
  );
};

export default QuestionsAsk;
