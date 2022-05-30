import React, { useCallback, useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import { useAuth } from "../hooks";
import jwt_decode from "jwt-decode";

const REGISTER_URL = "/employee";

const SignUpModal = ({ setToggleLogin }) => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  // const [nameFocus, setNameFocus] = useState(false);

  const [last, setLast] = useState("");
  const [validLast, setValidLast] = useState(false);
  // const [lastFocus, setLastFocus] = useState(false);

  const [job, setJob] = useState("");
  const [validJob, setValidJob] = useState(false);
  // const [jobFocus, setJobFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);
  //
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(true);
  }, [name]);

  useEffect(() => {
    setValidLast(true);
  }, [last]);

  useEffect(() => {
    setValidJob(true);
  }, [job]);

  useEffect(() => {
    setValidUser(true);
  }, [user]);

  useEffect(() => {
    setValidPwd(true);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleChange = useCallback(
    (event) => {
      setToggleLogin(true);
    },
    [setToggleLogin]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(REGISTER_URL, {
          employee_name: name,
          employee_last_name: last,
          // departmet_id: 1,
          job_title: job,
          username: user,
          employee_password: pwd,
        })
        .then((res) => {
          const token = res.data.accessToken;
          var decode = jwt_decode(token);
          var info = decode.user[0];
          console.log(info);
          setAuth({ token, decode, info });
        });
      setName("");
      setLast("");
      setJob("");
      setUser("");
      setPwd("");
      console.log("Register success");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      console.log("Register failed, try again");
      console.log(err);
      errRef.current.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-6 bg-white drop-shadow-md rounded-2xl m-auto"
    >
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
      <p className="flex justify-center font-bold text-2xl">Sign Up</p>
      <input
        type="text"
        id="name"
        placeholder="Name *"
        ref={nameRef}
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
        required
        aria-invalid={validName ? "false" : "true"}
        // onFocus={() => setNameFocus(true)}
        // onBlur={() => setNameFocus(false)}
        className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"
      />

      <input
        type="text"
        id="lastname"
        placeholder="Last Name *"
        autoComplete="off"
        onChange={(e) => setLast(e.target.value)}
        required
        aria-invalid={validLast ? "false" : "true"}
        // onFocus={() => setLastFocus(true)}
        // onBlur={() => setLastFocus(false)}
        className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"
      />

      <input
        type="text"
        id="job_title"
        placeholder="Job Title"
        ref={nameRef}
        autoComplete="off"
        onChange={(e) => setJob(e.target.value)}
        aria-invalid={validJob ? "false" : "true"}
        // onFocus={() => setJobFocus(true)}
        // onBlur={() => setJobFocus(false)}
        className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"
      />

      <input
        type="text"
        id="username"
        placeholder="Username *"
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        required
        aria-invalid={validUser ? "false" : "true"}
        // onFocus={() => setUserFocus(true)}
        // onBlur={() => setUserFocus(false)}
        className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"
      />

      <input
        type="password"
        id="password"
        placeholder="Password *"
        onChange={(e) => setPwd(e.target.value)}
        required
        aria-invalid={validPwd ? "false" : "true"}
        // onFocus={() => setPwdFocus(true)}
        // onBlur={() => setPwdFocus(false)}
        className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"
      />

      <input
        type="password"
        id="confirm_pwd"
        placeholder="Confirm Password *"
        onChange={(e) => setMatchPwd(e.target.value)}
        required
        aria-invalid={validMatch ? "false" : "true"}
        // onFocus={() => setMatchFocus(true)}
        // onBlur={() => setMatchFocus(false)}
        className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"
      />

      <button
        disabled={!validName || !validPwd || !validMatch ? true : false}
        className="bg-red-wz-200 text-white rounded-2xl outline-none drop-shadow-md duration-200 h-12 w-64 my-4 hover:bg-red-400"
      >
        Sign Up
      </button>

      <p className="flex justify-center font-bold text-sm mt-8">
        Aready have an account?
        <button
          onClick={handleChange}
          className="text-red-wz-200 ml-1 hover:text-red-400 cursor-pointer"
        >
          {" "}
          Login
        </button>
      </p>
    </form>
  );
};

export default SignUpModal;
