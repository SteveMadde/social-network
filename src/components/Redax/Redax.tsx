import {combineReducers, createStore} from "redux"
import {profileReducer} from "../Profile/Profile_Reducer";
import {dialogReducer} from "../Dialogs/Dialogs_Reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

let store = createStore(reducers)

export default store