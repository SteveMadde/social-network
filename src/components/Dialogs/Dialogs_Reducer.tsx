import {ActionsTypes, ADD_DIALOG_MESSAGE, CHANGE_NEW_MESSAGE} from "../Redax/State";

let initialState = {
    dialogs: [
        {id: 0, name: "Vladik"},
        {id: 1, name: "Ruslan"},
        {id: 2, name: "Natasha"},
        {id: 3, name: "Kiron"},
        {id: 4, name: "Artur"},
        {id: 5, name: "Roma"},
    ],
    messages: [
        {id: 0, message: "First post"},
        {id: 1, message: "bla bl"},
        {id: 2, message: "badya badya"},
    ],
    newMessage: '',
}

export const dialogReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_DIALOG_MESSAGE :
            return {
                ...state,
                messages: [...state.messages, { id: 3, message: state.newMessage} ],
                newMessage: ''
            }
        case CHANGE_NEW_MESSAGE : {
            return {
                ...state,
                newMessage: action.newMessage
            }
        }
        default: {
            return state
        }
    }
}


