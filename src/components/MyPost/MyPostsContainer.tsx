import React from "react";
import {addPostAC} from "../Redax/State";
import {MyPosts} from "./MyPosts";

import {connect,} from "react-redux";
import {DispatchType, StateType} from "../Redax/Redax";


let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        /*ChangePostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let action = changeNewTextAC(e.currentTarget.value)
            dispatch(action)
        },*/
        addPostHandler: (newPostText: string) => {
            let action = addPostAC(newPostText)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)








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
