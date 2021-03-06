import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

let image2 =
    "https://ecowall.com.ua/files/cache/d3/99/5a/nat00003-1539871229.jpg.pagespeed.ce.bzZU4Yf382.jpg";
let image1 = "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export let Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img className={s.img1} src={image1} alt={''}/>
            <img className={s.img2} src={image2} alt={''}/>
            <div className={s.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
};
