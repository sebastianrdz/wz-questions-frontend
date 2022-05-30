const DepartmentFilterItem = (props) => {
  class FilterItem {
    constructor(id, name) {
      this.status = false;
      this.name = name;
      this.id = id;
    }
  }

  const filterHandler = () => {
    var checkbox = document.getElementById(props.id);
    var v = new FilterItem(props.id, props.department_name);
    if (checkbox.checked === true) {
      v.status = true;
      props.setFiltersApplied((prev) => [...prev, props.id]);
    } else if (checkbox.checked === false) {
      v.status = false;
      props.setFiltersApplied((prev) =>
        prev.filter((item) => item !== props.id)
      );
    }
    // console.log("At atom level the item is", v);
  };

  return (
    <div className="flex flex-row mb-1 ml-4">
      <input
        className="form-check appearance-none h-4 w-4 border border-white rounded-sm bg-red checked:bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        onClick={filterHandler}
        id={props.id}
      />
      <label
        className="form-check-label inline-block text-limit-sm text-white text-base cursor-pointer"
        htmlFor={props.id}
      >
        {props.department_name}
      </label>
    </div>
  );
};
export default DepartmentFilterItem;
