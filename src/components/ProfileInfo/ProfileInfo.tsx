import React from "react";
import s from "./ProfileInfo.module.css";
let image =
  "https://sun9-43.userapi.com/impg/K8LTMidtLJ1-5DKTE-xrYgOkOpfCilW8APlx0Q/FCCG3FykOks.jpg?size=1280x1063&quality=96&sign=b0d070b2dc72e505768e2984883ca5e3&type=album";

export let ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <img src={image}  alt={''}/>
      <div>
        <ul>
          <li> Name: Ruslan</li>
          <li> City: Belarus</li>
          <li> age: 24</li>
        </ul>
      </div>
    </div>
  );
};
