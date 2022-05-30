import React, { useCallback } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { DepartmentFilterItem } from "../components";

const QuestionsFilter = ({
  setToggleFilter,
  departmentsAbailable,
  setFiltersApplied,
}) => {
  const handleBack = useCallback(
    (event) => {
      setToggleFilter(false);
    },
    [setToggleFilter]
  );

  return (
    <div className="h-96 w-56 bg-red-wz-gr p-4 rounded-l-3xl slide-left drop-shadow-lg flex flex-col">
      <div className="flex flex-row mb-2 items-center">
        <RiArrowLeftSLine
          size={40}
          onClick={handleBack}
          className="border rounded-full p-1 mr-4 bg-white text-red-wz-200 cursor-pointer"
        />
        <h1 className="text-white text-2xl font-bold tracking-wide">Filter</h1>
      </div>

      <section className="my-1">
        <h1 className="text-white font-bold tracking-wide text-lg">
          Department
        </h1>
        {departmentsAbailable.map((department) => (
          <DepartmentFilterItem
            id={department.department_id}
            department_name={department.department_name}
            setFiltersApplied={setFiltersApplied}
          />
        ))}
      </section>

      <section className="my-1">
        <h1 className="text-white font-bold tracking-wide text-lg">Status</h1>
        <DepartmentFilterItem
          id={200}
          department_name="Pending"
          setFiltersApplied={setFiltersApplied}
        />
        <DepartmentFilterItem
          id={201}
          department_name="Solved"
          setFiltersApplied={setFiltersApplied}
        />
      </section>

      <section className="my-1">
        <h1 className="text-white font-bold tracking-wide text-lg">Date</h1>
        <DepartmentFilterItem
          id={300}
          department_name="Last Week"
          setFiltersApplied={setFiltersApplied}
        />
        <DepartmentFilterItem
          id={301}
          department_name="Last Month"
          setFiltersApplied={setFiltersApplied}
        />
      </section>
    </div>
  );
};

export default QuestionsFilter;
