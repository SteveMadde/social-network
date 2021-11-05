import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPost/MyPostsContainer";



/*type ProfilePropsType = {
    store: StoreType
};*/




export let Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
