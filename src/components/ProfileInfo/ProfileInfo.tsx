import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../common/Preloader/Preloader";
import {ProfileType} from "../../api";
import {ProfileStatus} from "./ProfileStatus";
let image = "https://sun9-43.userapi.com/impg/K8LTMidtLJ1-5DKTE-xrYgOkOpfCilW8APlx0Q/FCCG3FykOks.jpg?size=1280x1063&quality=96&sign=b0d070b2dc72e505768e2984883ca5e3&type=album";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    statusUpdate: (status: string) => void
}

export let ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) {
        return <Preloader/>
    }
  return (
    <div className={s.profileInfo}>
        <img src={props.profile.photos.large} alt={''}/>
      <img src={image}  alt={''}/>
      <div>
        <ul>
          <li>{props.profile.fullName}</li>
          <li> {props.profile.lookingForAJob}</li>
          <li> {props.profile.userId}</li>
        </ul>
          <ProfileStatus status={props.status} statusUpdate={props.statusUpdate}/>
      </div>
    </div>
  );
};
