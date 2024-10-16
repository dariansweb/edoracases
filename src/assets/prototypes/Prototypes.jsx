import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./styles/Prototype.css";

const Prototypes = () => {
  return (
    <>
      <h1 className="dark">Prototypes</h1>

      {/* Submenu Navigation */}
      <div className="submenu">
        {/* <NavLink
          to="floatingactionbuttons"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Floating Buttons
        </NavLink> */}
        {/* <NavLink
          to="dashboard1"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard 1
        </NavLink> */}
        <NavLink
          to="forminput"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Input
        </NavLink>
        <NavLink
          to="formlistbox"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Listbox
        </NavLink>
        <NavLink
          to="formselect"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Select
        </NavLink>
        <NavLink
          to="formtextarea"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Textarea
        </NavLink>
        <NavLink
          to="formradiobutton"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Radio
        </NavLink>
        <NavLink
          to="formcheckbox"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Checkbox
        </NavLink>
      </div>
      <div className="pages-container">
        {/* Render the selected child component */}
        <section>
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default Prototypes;
