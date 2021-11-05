import {ActionsTypes, ADD_DIALOG_MESSAGE, CHANGE_NEW_MESSAGE, MessagesType} from "../Redax/State";

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
      switch(action.type) {
          case ADD_DIALOG_MESSAGE :
              let newMessage: MessagesType = {
                  id: 1,
                  message: action.dialogMessage
              }
              state.messages.push(newMessage)
              return state
          case CHANGE_NEW_MESSAGE : {
              state.newMessage = action.newMessage
              return state
          }
          default: {
              return state
          }
      }
}