import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Setting/Settings";
import {HomePage} from "./components/HomePage/HomePage";
import {DialogsPageType, ProfilePageType, ActionsTypes} from "./components/Redax/State";

type AppPropsType = {
    DialogsPage: DialogsPageType;
    ProfilePage: ProfilePageType;
    changeNewPostText: (newText: string) => void
    addPost: (PostMessage: string) => void;
    addDialog: (DialogMessage: string) => void;
    dispatch: (action: ActionsTypes) => void
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div>
                <div className="App">
                    <Header/>
                    <NavBar/>
                    <Route
                        path="/profile"
                        render={() => <Profile posts={props.ProfilePage.posts}
                                               newPostText={props.ProfilePage.newPostText}
                                               changeNewPostText={props.changeNewPostText} addPost={props.addPost}
                                               dispatch={props.dispatch} /> } />
                    <Route path="/friends" render={() => <Friends/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route
                        path="/dialogs"
                        render={() => (<Dialogs dialogs={props.DialogsPage.dialogs}
                                                messages={props.DialogsPage.messages}
                                                addDialog={props.addDialog}
                                                dispatch={props.dispatch}
                                                newMessage={props.DialogsPage.newMessage}
                            />
                        )
                        }
                    />
                    <Route path="/homepage" render={() => <HomePage/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
