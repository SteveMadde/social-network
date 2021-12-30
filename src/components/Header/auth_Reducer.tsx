import {
    ActionsTypes,
    SET_USER_DATA,
} from "../Redax/State";
import {usersApi} from "../../api";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "../Redax/Redax";


export type DataType = {
    id: number
    email: string
    login: string
}
type initialStateType = {
    data: DataType
    resultCode: number
    messages: string[]
    isAuth: boolean
}


export let initialState: initialStateType = {
    data: {
        id: 1,
        email: 'string',
        login: ''
    },
    resultCode: 0,
    messages: ['stroka'],
    isAuth: false
}


export const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: {
            return state
        }
    }
}


export const setAuthUserData = (data: DataType) => ({type: SET_USER_DATA, data} as const)

export const getAuthMe = () => {
    return (dispatch: ThunkDispatch<StateType, any, ActionsTypes>) => {
        usersApi.authMe().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        })
    }
}

