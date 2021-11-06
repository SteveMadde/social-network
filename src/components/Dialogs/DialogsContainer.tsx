import React, {ChangeEvent} from "react";
import {addDialogMessageAC, changeDialogMessageAC,} from "../Redax/State";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../Redax/Redax";

/*type DialogsContainerType = {
    store: StoreType
    /!*  dialogs: Array<DialogsType>;
      messages: Array<MessagesType>;
      addDialog: (DialogMessage: string) => void;
      dispatch: (action: ActionsTypes) => void
      newMessage: string*!/
};*/


let mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        sendMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let action = changeDialogMessageAC(e.currentTarget.value)
            dispatch(action)
        },
        addDialogsHandler: () => {
            let action = addDialogMessageAC()
            dispatch((action))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)




/*

export let DialogsContainer = () => {



    return ( <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().DialogsPage

                let sendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    let body = e.currentTarget.value
                    store.dispatch(changeDialogMessageAC(body))
                }

                let addDialogsHandler = () => {
                    store.dispatch(addDialogMessageAC(state.newMessage));
                }
           return     <Dialogs dialogs={state.dialogs}
                         messages={state.messages}
                         newMessage={state.newMessage}
                         sendMessageChange={sendMessageChange}
                         addDialogsHandler={addDialogsHandler}
                />
            }
        }
    </StoreContext.Consumer> )
};
*/
