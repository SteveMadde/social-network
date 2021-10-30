import React from "react";
import s from "./../Dialogs.module.css";

type MessagesPropsType = {
  message: string;
};

export let Message = (props: MessagesPropsType) => {
/*  let MessagesData = [
    { id: 0, message: "First post" },
    { id: 1, message: "bla bl" },
    { id: 2, message: "badya badya" },
  ];*/
  return (
    <div className={s.messages}>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};
