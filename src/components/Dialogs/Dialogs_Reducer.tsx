
import {
    ActionsTypes,
    ADD_DIALOG_MESSAGE,
    CHANGE_NEW_MESSAGE,
    DialogsPageType,
    MessagesType,
} from "../Redax/State";


export const dialogReducer = (state: DialogsPageType, action: ActionsTypes) => {
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