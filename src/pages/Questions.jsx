import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import {
  SearchBar,
  Navbar,
  QuestionsOptions,
  QuestionsFilter,
  QuestionsSort,
  QuestionsViews,
  QuestionsAsk,
  QuestionsCardsV1,
  LoadingModal,
} from "../components";
import { useAuth } from "../hooks";
const GETQUESTIONS_URL = "/questions";
const GETDEPARTMENTS_URL = "/department";

const Questions = () => {
  const { auth } = useAuth();

  const [toggleLoading, setToggleLoading] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);
  const [toggleView, setToggleView] = useState(false);

  const [questions, setQuestions] = useState([]);
  //   const [likes, setLikes] = useLocalStorage("all_likes", []);
  const [viewType, setViewType] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [departmentsAbailable, setDepartmentsAbailable] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState([]);

  const [outputArray, setOutputArray] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      setToggleLoading(true);
      try {
        await axios
          .get(GETQUESTIONS_URL, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            console.log(res.data.questions);
            setQuestions(res?.data?.questions);
            setOutputArray(res?.data?.questions);
          });
      } catch (err) {
        console.log(err);
      }
      setToggleLoading(false);
    }

    async function fetchDepartments() {
      try {
        await axios
          .get(GETDEPARTMENTS_URL, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            console.log("Departments: ", res.data.departments);
            setDepartmentsAbailable(res?.data?.departments);
          });
      } catch (err) {
        console.log(err);
      }
    }

    fetchQuestions();
    fetchDepartments();
  }, [auth.token]);

  useEffect(() => {
    if (filtersApplied.length > 0) {
      setFilterResult();
      setFilterResult(
        outputArray.filter((q) => filtersApplied.includes(q.department_id))
      );
    } else {
      setFilterResult([]);
    }
    console.log(filtersApplied);
  }, [filtersApplied, outputArray]);

  useEffect(() => {
    searchResults?.length === 0 &&
      filterResult.length === 0 &&
      setOutputArray(questions);
    searchResults?.length > 0 &&
      filterResult.length === 0 &&
      setOutputArray(searchResults);
  }, [searchResults, filterResult, questions]);

  let currViewClass1 =
    "h-fit w-11/12 lg:w-10/12 mx-auto my-2 overflow-auto overscroll-contain p-2 grid grid-cols-1 gap-2 md:gap-4";
  let currViewClass2 =
    "h-fit w-11/12 lg:w-10/12 mx-auto my-2 overflow-auto overscroll-contain p-2 grid grid-cols-2 gap-2 md:gap-4";
  let currViewClass3 =
    "h-fit w-11/12 lg:w-10/12 mx-auto my-2 overflow-auto overscroll-contain p-2 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-4";

  return (
    <div className="flex flex-col h-screen w-screen bg-img">
      <Navbar />
      <div className="mt-4">
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearchResults={setSearchResults}
          setToggleLoading={setToggleLoading}
        />
      </div>
      <div className="right-0 top-1/3 flex z-20 absolute ">
        <div className="my-auto ml-auto mr-4 md:mr-8">
          <QuestionsOptions
            setToggleAdd={setToggleAdd}
            setToggleFilter={setToggleFilter}
            setToggleSort={setToggleSort}
            setToggleView={setToggleView}
          />
        </div>
        {toggleFilter ? (
          <QuestionsFilter
            setToggleFilter={setToggleFilter}
            departmentsAbailable={departmentsAbailable}
            setFiltersApplied={setFiltersApplied}
          />
        ) : toggleSort ? (
          <QuestionsSort setToggleSort={setToggleSort} />
        ) : toggleView ? (
          <QuestionsViews
            setToggleView={setToggleView}
            setViewType={setViewType}
          />
        ) : (
          ""
        )}
      </div>
      {toggleAdd && (
        <QuestionsAsk
          setToggleAdd={setToggleAdd}
          departments={departmentsAbailable}
        />
      )}

      <div
        className={
          viewType === 1
            ? currViewClass1
            : viewType === 2
            ? currViewClass2
            : viewType === 3
            ? currViewClass3
            : ""
        }
      >
        {toggleLoading && questions?.length === 0 && <LoadingModal />}
        {filtersApplied.length === 0 &&
          outputArray
            ?.slice(0)
            ?.reverse()
            ?.map((question) => (
              <QuestionsCardsV1
                key={question.question_id}
                input={question.question_text}
                commentCount={question.comment_count}
                likeCount={question.like_count}
                dateCreated={question.date_created}
                userId={question.employee_id}
                questionId={question.question_id}
              />
            ))}
        {filterResult.length > 0 &&
          filterResult
            ?.slice(0)
            ?.reverse()
            ?.map((question) => (
              <QuestionsCardsV1
                key={question.question_id}
                input={question.question_text}
                commentCount={question.comment_count}
                likeCount={question.like_count}
                dateCreated={question.date_created}
                userId={question.employee_id}
                questionId={question.question_id}
              />
            ))}
      </div>
    </div>
  );
};

export default Questions;
