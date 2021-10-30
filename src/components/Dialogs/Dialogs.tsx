import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {Message} from "./Messages/Messages";
import {DialogItem} from "./DialogItem/DialogsItem";
import {
    ActionsTypes,
    addDialogMessageAC,
    changeDialogMessageAC,
    DialogsType,
    MessagesType,
} from "../Redax/State";

type addDialogType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
    addDialog: (DialogMessage: string) => void;
    dispatch: (action: ActionsTypes) => void
    newMessage: string
};

export let Dialogs = (props: addDialogType) => {
    let DialogsElement = props.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let MessagesElement = props.messages.map((m) => <Message key={m.id} message={m.message}/>);

    let sendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(changeDialogMessageAC(body))
    }

    let addDialogsHandler = () => {
        props.dispatch(addDialogMessageAC(props.newMessage));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {DialogsElement}
                <textarea onChange={sendMessageChange} value={props.newMessage}/>
            </div>
            <div className={s.messages}>{MessagesElement}</div>
            <button onClick={addDialogsHandler}> add dialog</button>
        </div>
    );
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
