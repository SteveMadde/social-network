import React, {ChangeEvent} from "react";
import {addPostAC, changeNewTextAC} from "../Redax/State";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../StoreContext";

/*type MyPostsContainerType = {
    store: StoreType
};*/

export let MyPostsContainer = () => {

    return ( <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().ProfilePage

                let addPostHandler = () => {
                    store.dispatch(addPostAC(state.newPostText))
                };

                let ChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(changeNewTextAC(e.currentTarget.value))
                }

    return        <MyPosts posts={state.posts} newPostText={state.newPostText} addPostHandler={addPostHandler}
                     ChangePostText={ChangePostText}/>
        }
        }
        </StoreContext.Consumer> )
}

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