import {ActionsTypes, ADD_POST, CHANGE_NEW_POST_TEXT, PostType} from "../Redax/State";

export let initialState = {
        posts: [
            {id: 1, post: "My first post"},
            {id: 2, post: "Hallo"},
            {id: 2, post: "123fg"},
        ],
        newPostText: 'privet ya strtoka',
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 7,
                post: state.newPostText,
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