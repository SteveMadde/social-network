import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";



export let NavBar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.item}>
        <NavLink to={"/homepage"} activeClassName={s.activeLink}>
          {" "}
          HomePage{" "}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/profile"} activeClassName={s.activeLink}>
          {" "}
          Profile{" "}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/dialogs"} activeClassName={s.activeLink}>
          {" "}
          Dialogs{" "}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/friends"} activeClassName={s.activeLink}>
          {" "}
          Friends{" "}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/settings"} activeClassName={s.activeLink}>
          {" "}
          Settings{" "}
        </NavLink>
      </div>
        <div className={s.item}>
        <NavLink to={"/addDialogs"} activeClassName={s.activeLink}>
          {" "}
            addDialogs{" "}
        </NavLink>
      </div>
    </div>
  );
};
