import React from "react";
import { FaBars } from "react-icons/fa";

function NavMenuComponent(props) {
  return (
    <div>
      <FaBars
        className="rounded-full p-2 bg-gray-200 hover:shadow-2xl cursor-pointer"
        size={50}
        onClick={props.toggleNav}
      />
    </div>
  );
}

export default NavMenuComponent;
