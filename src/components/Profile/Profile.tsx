import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPost/MyPostsContainer";
import {ProfileType} from "../../api";




/*type ProfilePropsType = {
    store: StoreType
};*/

type ProfilePropsType = {
    profile: ProfileType
}


export let Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    );
};
