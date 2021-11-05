import React, {ChangeEvent} from "react";
import {
    addDialogMessageAC,
    changeDialogMessageAC
} from "../Redax/State";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

/*type DialogsContainerType = {
    store: StoreType
    /!*  dialogs: Array<DialogsType>;
      messages: Array<MessagesType>;
      addDialog: (DialogMessage: string) => void;
      dispatch: (action: ActionsTypes) => void
      newMessage: string*!/
};*/

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


/*<DialogItem id={DialogsData[0].id} name={DialogsData[0].name}/>
                <DialogItem id={DialogsData[1].id} name={DialogsData[1].name}/>
                <DialogItem id={DialogsData[2].id} name={DialogsData[2].name}/>
                <DialogItem id={DialogsData[3].id} name={DialogsData[3].name}/>
                <DialogItem id={DialogsData[4].id} name={DialogsData[4].name}/>
                <DialogItem id={DialogsData[5].id} name={DialogsData[5].name}/>*/


/* <Messages message={MessagesData[0].message}/>
               <Messages message={MessagesData[1].message}/>
               <Messages message={MessagesData[2].message}/>*/


/*   <div className={s.dialog}><NavLink to={'/dialogs/2'} activeClassName={s.activeLink}>
                    Ruslan</NavLink>
                      <div className={s.dialog}><NavLink to={'/dialogs/1'} activeClassName={s.activeLink}>
                    Vladik</NavLink></div>
                </div>
                <div className={s.dialog}><NavLink to={'/dialogs/3'} activeClassName={s.activeLink}>
                    Natasha</NavLink>
                </div>
                <div className={s.dialog}><NavLink to={'/dialogs/4'} activeClassName={s.activeLink}>
                    Lexa</NavLink>
                </div>
                <div className={s.dialog}><NavLink to={'/dialogs/5'} activeClassName={s.activeLink}>
                    Kiron</NavLink>
                </div>
                <div className={s.dialog}><NavLink to={'/dialogs/6'} activeClassName={s.activeLink}>
                    Artur</NavLink>
                </div>*/


/*
<div className={s.message}>'How are you?'</div>
<div className={s.message}>'Welcome'</div>
<div className={s.message}>'Pivo?'</div>*/
