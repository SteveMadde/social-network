import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post";
import {PostType} from "../Redax/State";

type MyPostType = {
    posts: Array<PostType>;
    newPostText: string
    ChangePostText: (e:ChangeEvent<HTMLTextAreaElement>) => void
    addPostHandler: () => void
};

export let MyPosts = (props: MyPostType) => {

    return (
        <div className={s.mypost}>
            {/* <button onClick={() => setPost(post+1)}> {post}</button>*/}
            <div>
                <textarea onChange={props.ChangePostText} value={props.newPostText}/>
                <div>
                    <button className={s.button} onClick={props.addPostHandler}>
                        add post
                    </button>
                </div>
                {
                    props.posts.map((p, index) => {
                        return <Post message={p.post} key={index}/>;
                    })
                }
            </div>
        </div>
    );
};

/*
{PostData.map(function (post){
    return <Post message={post.post}/>
}
*/

/*//@ts-ignore
    Array.prototype.map2 = function (Array:any) {
        let newArray = []
        for (let i = 0; i < Array.length; i++ ){
            newArray.push(<Vladik message={Array[i].message}/>)
        }
        return newArray
    }
    //@ts-ignore

    let Blabla = PostData[0].id;*/
