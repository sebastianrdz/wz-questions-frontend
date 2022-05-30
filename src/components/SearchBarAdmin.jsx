import { useEffect } from "react";
import axios from "../api/axios";
import { useAuth } from "../hooks";

const SEARCH_URL = "employee/search/";

const SearchBarAdmin = ({
  searchInput,
  setSearchInput,
  setSearchResults,
  setToggleLoading,
}) => {
  // TODO ADMIN SEARCH

  const { auth } = useAuth();

  useEffect(() => {
    async function getSearchRes() {
      setToggleLoading(true);
      try {
        await axios
          .get(SEARCH_URL + searchInput, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            setSearchResults(res?.data?.employees);
            console.log(searchInput, res);
          });
      } catch (err) {
        console.log(err);
      }
      setToggleLoading(false);
    }

    getSearchRes();
  }, [auth.token, searchInput, setSearchResults, setToggleLoading]);

  return (
    <div className="flex mx-auto bg-white h-14 border-2 rounded-3xl py-4 px-8 justify-center content-center cursor-pointer duration-200 drop-shadow-md w-10/12 md:w-8/12 2xl:w-6/12">
      <input
        type="text"
        name="search"
        placeholder="Search for..."
        className="border-none outline-none bg-transparent w-full"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button href="#" className="search-btn">
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default SearchBarAdmin;
