import {ActionsTypes, ADD_POST, CHANGE_NEW_POST_TEXT, PostType, ProfilePageType,} from "../Redax/State";


export const profileReducer = (state: ProfilePageType , action:ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 7,
                post: action.PostMessage,
            };
            state.posts.push(newPost)
            return state
        case CHANGE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}