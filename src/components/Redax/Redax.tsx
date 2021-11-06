import {combineReducers, createStore} from "redux"
import {profileReducer} from "../Profile/Profile_Reducer";
import {dialogReducer} from "../Dialogs/Dialogs_Reducer";

export type DispatchType = typeof store.dispatch

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

const store = createStore(reducers)
export default store


export type StateType = ReturnType<typeof store.getState>
export type StoreRedaxType = typeof store


