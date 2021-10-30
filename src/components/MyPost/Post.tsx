import React from "react";
import s from "./Post.module.css";

type PostType = {
  message: string;
};

export let Post = (props: PostType) => {
  let [like, setLike] = React.useState(0);

  return (
    <div className={s.post}>
      <div>
        {props.message}
        <button onClick={() => setLike(like + 1)}> {like} </button>
      </div>
    </div>
  );
};
