import React, {ChangeEvent} from "react";
import {addDialogMessageAC, changeDialogMessageAC, DialogsType, MessagesType,} from "../Redax/State";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../Redax/Redax";
import {Redirect} from "react-router-dom";

type DialogsContainerType = {
    isAuth: boolean
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
    newMessage: string
    sendMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addDialogsHandler: () => void
}


class DialogsContainer extends React.Component<DialogsContainerType> {


    render() {
        return <>
            {
                !this.props.isAuth ? <Redirect to='/login'/> : <Dialogs dialogs={this.props.dialogs}
                                                                        messages={this.props.messages}
                                                                        newMessage={this.props.newMessage}
                                                                        sendMessageChange={this.props.sendMessageChange}
                                                                        addDialogsHandler={this.props.addDialogsHandler}/>

            }
        </>
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
        isAuth: state.authData.isAuth
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

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)




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
