import {
    ActionsTypes,
    ADD_POST,
    CHANGE_NEW_POST_TEXT,
    SET_USER_PROFILE
} from "../Redax/State";
import {ProfileType} from "../../api";



type initialStateType  = {
    posts: {id: number, post: string}[],
    newPostText: string,
    profile: ProfileType
}


export let initialState: initialStateType = {
    posts: [
        {id: 1, post: "My first post"},
        {id: 2, post: "Hallo"},
        {id: 2, post: "123fg"},
    ],
    newPostText: 'privet ya strtoka',
    profile: {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk:'',
            facebook: '',
            instagram:'',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }}
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 1, post: state.newPostText}],
                newPostText: ''
            }
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: {
            return state
        }
    }
}
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)