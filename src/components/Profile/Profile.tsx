import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "../MyPost/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../Redax/State";

type addPostPageType = {
    posts: Array<PostType>;
    addPost: (PostMessage: string) => void;
    newPostText: string
    changeNewPostText: ( newText: string ) => void
    dispatch: (action: ActionsTypes) => void
};

export let Profile = (props: addPostPageType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} changeNewPostText={props.changeNewPostText}
             dispatch={props.dispatch} />
        </div>
    );
};
