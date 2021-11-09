import {ActionsTypes, ADD_POST, CHANGE_NEW_POST_TEXT} from "../Redax/State";

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
            return {
                ...state,
                posts: [ ...state.posts, {id: 1, post: state.newPostText} ],
                newPostText: ''
            }
        case CHANGE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: {
            return state
        }
    }
}