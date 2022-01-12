import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPost/MyPostsContainer";
import {ProfileType} from "../../api";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    statusUpdate: (status: string) => void
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} statusUpdate={props.statusUpdate}/>
            <MyPostsContainer/>
        </div>
    );
};
