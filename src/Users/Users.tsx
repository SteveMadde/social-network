import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../components/Redax/State";
import userPhoto from "../Users/userPhoto.jpg"
import s from "./Users.module.css"



export type UsersType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    toggleFollowingProgress:(isFetching:boolean, userId: number) => void
    followingInProgress: number[]
    unFollow: (userId: number) => void
    Follow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    pageChanger: (pageNumber: number) => void
}


export let Users = (props: UsersType) => {

    let pagesCount = Math.ceil(50 / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            const onChangePage = () => {
                props.pageChanger(p)
            }
            return <span className={props.currentPage === p ? s.selectedPage : ''}
                         onClick={onChangePage} key={p}>{p}</span>
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
                            props.unFollow(user.id)
                            /*props.toggleFollowingProgress(true, user.id)
                            usersApi.unFollow(user.id).then(
                                data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                    props.toggleFollowingProgress(false,user.id)
                                })*/
                        }}>
                            unFollow
                        </button> : <button disabled={props.followingInProgress.some(id=>id === user.id)} onClick={() => {
                            props.Follow(user.id)
                            /*props.toggleFollowingProgress(true, user.id)
                            usersApi.follow(user.id).then(
                                data => {
                                    if (data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id)
                                })*/
                        }}>Follow</button>
                    }
                </div>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
            </div>
        })}
    </div>
}

