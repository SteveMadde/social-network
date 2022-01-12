import {applyMiddleware, combineReducers, createStore, } from "redux"
import {profileReducer} from "../Profile/Profile_Reducer";
import {dialogReducer} from "../Dialogs/Dialogs_Reducer";
import {usersReducer} from "../../Users/Users_Reducer";
import {authReducer} from "../Header/auth_Reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';

export type DispatchType = typeof store.dispatch

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    authData: authReducer,
    form: formReducer
})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
export default store

export type AppStateType = typeof rootReducers
export type StateType = ReturnType<typeof store.getState>
export type StoreReduxType = typeof store

//@ts-ignore
window.store = store


