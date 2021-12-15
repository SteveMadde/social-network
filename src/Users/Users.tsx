import React from "react";
import { NavLink } from "react-router-dom";
import {UserType} from "../components/Redax/State";
import userPhoto from "../Users/userPhoto.jpg"
import s from "./Users.module.css"


export type UsersType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanger: (page: number) => void
}


export let Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : ''}
                         onClick={(e) => {
                             props.onPageChanger(p)
                         }}>{p}</span>
        })}
        {props.users.map(user => {
            return <div>
                <NavLink to={`/profile/${user.id}`}>
                <img src={userPhoto} alt={''}/>
                </NavLink>
                {user.id}
                <div>
                    {
                        user.followed ? <button onClick={() => {
                            props.unfollow(user.id)
                        }}>
                            unFollow
                        </button> : <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>
                    }
                </div>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
            </div>
        })}
    </div>
}

