import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import {
  SearchBarAdmin,
  Navbar,
  AdminOptions,
  AdminViews,
  AdminCards,
  LoadingModal,
} from "../components";
import { useAuth } from "../hooks";

const GETUSERS_URL = "/admin";

const Admin = () => {
  const { auth } = useAuth();
  const [toggleLoading, setToggleLoading] = useState(false); //TODO

  const [toggleSelectAll, setToggleSelectAll] = useState(false);
  const [toggleView, setToggleView] = useState(false);
  // const [users, setUsers] = useLocalStorage("all_users", []);
  // const [viewType, setViewType] = useLocalStorage("view_type_admin", 1);
  const [users, setUsers] = useState([]);
  const [viewType, setViewType] = useState(1);

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let currViewClass1 =
    "h-fit w-11/12 lg:w-10/12 mx-auto my-2 overflow-auto overscroll-contain p-2 grid grid-cols-2 gap-2 md:gap-4";
  let currViewClass2 =
    "h-fit w-11/12 lg:w-10/12 mx-auto my-2 overflow-auto overscroll-contain p-2 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-4";

  useEffect(() => {
    async function fetchUsers() {
      setToggleLoading(true);
      try {
        await axios
          .get(GETUSERS_URL, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            setUsers(res?.data?.employees);
            // console.log(res.data.employees);
          });
      } catch (err) {
        console.log(err);
      }
      setToggleLoading(false);
    }

    fetchUsers();
  }, [auth.token]);

  return (
    <div className="flex flex-col h-screen w-screen bg-img">
      <Navbar />
      <div className="mt-4">
        <SearchBarAdmin
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearchResults={setSearchResults}
          setToggleLoading={setToggleLoading}
        />
      </div>
      <div className="right-0 top-1/3 flex z-20 absolute ">
        <div className="my-auto ml-auto mr-4 md:mr-8">
          <AdminOptions
            setToggleSelectAll={setToggleSelectAll}
            setToggleView={setToggleView}
          />
        </div>
        {toggleView && (
          <AdminViews setToggleView={setToggleView} setViewType={setViewType} />
        )}
        {toggleSelectAll}
      </div>
      <div
        className={
          viewType === 1 ? currViewClass1 : viewType === 2 ? currViewClass2 : ""
        }
      >
        {toggleLoading && users.length === 0 && <LoadingModal />}
        {toggleLoading && searchInput !== "" && <LoadingModal />}
        {searchInput === "" &&
          users?.map((user) => (
            <AdminCards
              key={user.employee_id}
              name={user.employee_name}
              lastName={user.employee_last_name}
              username={user.username}
              isAdmin={user.is_admin}
              userId={user.employee_id}
            />
          ))}
        {searchInput !== "" &&
          searchResults?.map((user) => (
            <AdminCards
              key={user.employee_id}
              name={user.employee_name}
              lastName={user.employee_last_name}
              username={user.username}
              isAdmin={user.is_admin}
              userId={user.employee_id}
            />
          ))}
      </div>
    </div>
  );
};

export default Admin;
