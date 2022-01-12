import React from "react";
import "./App.css";
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Setting/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersLogicContainer} from "./Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Header/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {AddDialogInput} from "./components/Dialogs/AddDialogInput";


function App() {
    return (

        <BrowserRouter>
            <div>
                <div className="App">
                    <HeaderContainer/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <NavBar/>
                    <Route
                        path="/profile/:userId?"
                        render={() => <ProfileContainer/>}/>
                    <Route path="/friends" render={() => <Friends/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/homepage" render={() => <UsersLogicContainer/>}/>
                    <Route path="/addDialogs" render={() => <AddDialogInput/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
