import React from "react";
import {connect,} from "react-redux";
import {Users} from "./Users";
import {UserType} from "../components/Redax/State";
import {StateType} from "../components/Redax/Redax";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers,
    unFollow,
    Follow,

} from "./Users_Reducer";
import {Preloader} from "../components/common/Preloader/Preloader";

type UsersContainerType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    isFetching: boolean
    toggleFollowingProgress:(isFetching:boolean, userId: number) => void
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    unFollow: (userId: number) => void
    Follow: (userId: number) => void
}

export class UsersContainer extends React.Component<UsersContainerType, {}> {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /*this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            console.log(data)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.toggleIsFetching(false)
        })*/
    }
     pageChanger = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                                 pageSize={this.props.pageSize}
                                                                 currentPage={this.props.currentPage}
                                                                 setCurrentPage={this.props.setCurrentPage}
                                                                 toggleFollowingProgress={this.props.toggleFollowingProgress}
                                                                 followingInProgress={this.props.followingInProgress}
                                                                 Follow={this.props.Follow}
                                                                 unFollow={this.props.unFollow}
                                                                 getUsers={this.props.getUsers}
                                                                 pageChanger={this.pageChanger}

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
        followingInProgress: state.usersPage.followingInProgress
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
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    unFollow,
    Follow,
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
