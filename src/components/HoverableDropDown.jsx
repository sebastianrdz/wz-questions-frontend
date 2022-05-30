import { RiArrowDropDownFill } from "react-icons/ri";
import { Menu } from "@headlessui/react";

const HoverableDropDown = (props) => {
  return (
    <Menu>
      <div className=" flex-col inline-block">
        <Menu.Button className="text-red-wz-200 flex flex-row">
          Department
          <RiArrowDropDownFill size={22} className="text-red-wz-200" />
        </Menu.Button>

        <Menu.Items className="flex flex-col absolute p-2 drop-shadow-md bg-white rounded-lg space-y-1">
          <Menu.Item>
            <p
              className="hover:underline cursor-pointer"
              onClick={() => props.setDepartmentOption(null)}
            >
              None...
            </p>
          </Menu.Item>
          {props.departments.map((dep) => (
            <Menu.Item>
              <p
                className="hover:underline cursor-pointer"
                onClick={() => props.setDepartmentOption(dep.department_id)}
              >
                {dep.department_name}
              </p>
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default HoverableDropDown;
