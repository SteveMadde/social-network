import {ActionsTypes, ADD_POST, SET_STATUS, SET_USER_PROFILE} from "../Redax/State";
import {profileApi, ProfileType, usersApi} from "../../api";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "../Redax/Redax";


type initialStateType  = {
    posts: {id: number, post: string}[],
    profile: ProfileType,
    status: string
}


export let initialState: initialStateType = {
    posts: [
        {id: 1, post: "My first post"},
        {id: 2, post: "Hallo"},
        {id: 2, post: "123fg"},
    ],

    status: '',
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
                posts: [...state.posts, {id: 1, post: action.newPostText}],

            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default: {
            return state
        }
    }
}
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)


export const getProfileId = (userId: string ) => {
    return (dispatch: ThunkDispatch<StateType, any, ActionsTypes>) => {
        usersApi.profile(userId).then((data) => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getStatus = (userId: string ) => {
    return (dispatch: ThunkDispatch<StateType, any, ActionsTypes>) => {
        profileApi.status(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status: string ) => {
    return (dispatch: ThunkDispatch<StateType, any, ActionsTypes>) => {
        profileApi.statusUpdate(status).then(response => {
            if(response.data.resultCode === 0 ) {
                dispatch(setStatus(status))
            }
        })
    }
}