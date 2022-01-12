import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogsItemType = {
  id: number;
  name: string;
};

export const DialogItem = (props: DialogsItemType) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.activeLink}>
        {" "}
        {props.name}{" "}
      </NavLink>
    </div>
  );
};
