import React from "react";

const Drawer = ({setIsOpen}) => {
  return (
    <div>
      

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className=" fixed z-10 right-6 top-28   bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-40 "
      >
        <ul
          className="py-2 text-sm text-gray-300 "
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              contact
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
