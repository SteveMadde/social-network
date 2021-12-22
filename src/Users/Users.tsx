import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../components/Redax/State";
import userPhoto from "../Users/userPhoto.jpg"
import s from "./Users.module.css"
import {usersApi} from "../api";
import {toggleFollowingProgress} from "./Users_Reducer";


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
    toggleFollowingProgress:(isFetching:boolean, userId: number) => void
    followingInProgress: number[]
}


export let Users = (props: UsersType) => {

    let pagesCount = Math.ceil(50 / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : ''}
                         onClick={(e) => {
                             props.onPageChanger(p)
                         }} key={p}>{p}</span>
        })}
        {props.users.map(user => {
            return <div key={user.id}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={userPhoto} alt={''}/>
                </NavLink>
                {user.id}
                <div>
                    {
                        user.followed ? <button disabled={props.followingInProgress.some(id=>id === user.id)} onClick={() => {
                            props.toggleFollowingProgress(true, user.id)
                            usersApi.unFollow(user.id).then(
                                data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                    props.toggleFollowingProgress(false,user.id)
                                })
                        }}>
                            unFollow
                        </button> : <button disabled={props.followingInProgress.some(id=>id === user.id)} onClick={() => {
                            props.toggleFollowingProgress(true, user.id)
                            usersApi.follow(user.id).then(
                                data => {
                                    if (data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id)
                                })
                        }}>Follow</button>
                    }
                </div>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
            </div>
        })}
    </div>
}

