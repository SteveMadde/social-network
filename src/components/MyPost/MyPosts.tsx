import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post";
import {PostType} from "../Redax/State";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostType = {
    posts: Array<PostType>;
    addPostHandler: (newPostText: string) => void
};

type addPostType = {
    newPostText: string
}

export const AddPostNewForm: React.FC<InjectedFormProps<addPostType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={'newPostText'} placeholder={'Enter'} component={'textarea'}/>
        <div>
            <button className={s.button}>
                add post
            </button>
        </div>
    </form>;
}
export const AddPostReduxForm = reduxForm<addPostType>({
    form: 'ProfileAddPostNewForm'
    })(AddPostNewForm)

export let MyPosts = (props: MyPostType) => {

    let addPost = (formData:addPostType) => {
        props.addPostHandler(formData.newPostText)
    }

    let PostElement = props.posts.map((p, index) => {
        return <Post message={p.post} key={index}/>;
    })

    return (
        <div className={s.my_post}>
            <AddPostReduxForm onSubmit={addPost}/>
            {/*<AddPostNewForm onChange={props.ChangePostText} value={props.newPostText} onClick={props.addPostHandler}/>*/}
            {PostElement}
        </div>
    );
};



export default MyPosts;

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
