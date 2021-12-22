import {applyMiddleware, combineReducers, createStore, } from "redux"
import {profileReducer} from "../Profile/Profile_Reducer";
import {dialogReducer} from "../Dialogs/Dialogs_Reducer";
import {usersReducer} from "../../Users/Users_Reducer";
import {authReducer} from "../Header/auth_Reducer";
import thunkMiddleware from 'redux-thunk'

export type DispatchType = typeof store.dispatch
console.log()
const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    setAuthUserData: authReducer
})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
export default store

export type AppStateType = typeof rootReducers
export type StateType = ReturnType<typeof store.getState>
export type StoreReduxType = typeof store


