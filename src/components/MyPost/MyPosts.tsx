import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post";
import {ActionsTypes, addPostAC, PostType} from "../Redax/State";

type addPostType = {
    addPost: (PostMessage: string) => void;
    posts: Array<PostType>;
    newPostText: string
    changeNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
};

export let MyPosts = (props: addPostType) => {
    let PostElement = props.posts.map((p, index) => {
        return <Post message={p.post} key={index}/>;
    });
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostHandler = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC(props.newPostText) )
            /*addPost(newPostElement.current.value);
            newPostElement.current.value = " ";*/
        }
    };
    // let [post, setPost] = useState(1)
    let ChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostText(e.currentTarget.value)
    }
    console.log(props)
    return (
        <div className={s.mypost}>
            {/* <button onClick={() => setPost(post+1)}> {post}</button>*/}
            <div>
                <textarea ref={newPostElement} onChange={ChangePostText} value={props.newPostText}/>
                <div>
                    <button className={s.button} onClick={addPostHandler}>
                        add post
                    </button>
                </div>
                {PostElement}
            </div>
        </div>
    );
};

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
