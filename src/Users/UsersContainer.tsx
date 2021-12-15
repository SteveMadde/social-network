import React from "react";
import {connect,} from "react-redux";
import {Users} from "./Users";
import {UserType} from "../components/Redax/State";
import {StateType} from "../components/Redax/Redax";
import {
    follow,
    toggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./Users_Reducer";
import axios from "axios";
import {Preloader} from "../components/common/Preloader/Preloader";

type UsersContainerType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

export class UsersContainer extends React.Component<UsersContainerType, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanger = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                                 follow={this.props.follow}
                                                                 unfollow={this.props.unfollow}
                                                                 setUsers={this.props.setUsers}
                                                                 totalUsersCount={this.props.totalUsersCount}
                                                                 pageSize={this.props.pageSize}
                                                                 currentPage={this.props.currentPage}
                                                                 setCurrentPage={this.props.setCurrentPage}
                                                                 setTotalUsersCount={this.props.setTotalUsersCount}
                                                                 onPageChanger={this.onPageChanger}
        />}
        </>
    }
}


let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
/*let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export const UsersLogicContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)


/*type MyPostsContainerType = {
    store: StoreType
};*/

/*export let MyPostsContainer = () => {

    return (<StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().ProfilePage

                let addPostHandler = () => {
                    store.dispatch(addPostAC(state.newPostText))
                };

                let ChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(changeNewTextAC(e.currentTarget.value))
                }

                return <MyPosts posts={state.posts} newPostText={state.newPostText} addPostHandler={addPostHandler}
                                ChangePostText={ChangePostText}/>
            }
        }
    </StoreContext.Consumer>)
}*/

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
