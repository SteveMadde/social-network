import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {Message} from "./Messages/Messages";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsType, MessagesType} from "../Redax/State";

type DialogsPropsType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
    newMessage: string
    sendMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addDialogsHandler: () => void
};

export let Dialogs = (props: DialogsPropsType) => {
    let DialogsElement = props.dialogs.map((d, i) => <DialogItem key={i} id={d.id} name={d.name}/>);
    let MessagesElement = props.messages.map((m, i) => <Message key={i} message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {DialogsElement}
                <textarea onChange={props.sendMessageChange} value={props.newMessage}/>
            </div>
            <div className={s.messages}>{MessagesElement}</div>
            <button onClick={props.addDialogsHandler}> add dialog</button>
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
