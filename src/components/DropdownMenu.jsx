import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "../styles/dropdownMenu.css";
import { Dropdown } from "antd";

const DropdownMenu = ({ text, items, grid }) => {
  return (
    <Dropdown
      arrow
      overlayStyle={{ padding: "1rem" }}
      placement="bottom"
      dropdownRender={() => {
        if (items?.length > 0) {
          return (
            <div className={grid ? "__menu_items __grid_menu" : "__menu_items" }>
              {items?.map((it, i) => (
                <div className="__menu_items_list">
                  <img src={it.img} alt="" />
                  <div >
                  <span className="__menu_title">{it.title}</span> <br />
                  <span className="__menu_subtitle">{it.subTitle || ""}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        } else return null;
      }}
    >
      <li style={{ position: "relative" }} className="__nav_link_menu">
        {text}
        <FiChevronDown />
      </li>
    </Dropdown>
  );
};

export default DropdownMenu;
