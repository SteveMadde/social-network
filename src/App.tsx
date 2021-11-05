import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Setting/Settings";
import {HomePage} from "./components/HomePage/HomePage";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

/*type AppPropsType = {
    store: StoreType
}*/


function App() {
    return (
        <BrowserRouter>
            <div>
                <div className="App">
                    <Header/>
                    <NavBar/>
                    <Route
                        path="/profile"
                        render={() => <Profile /> } />
                    <Route path="/friends" render={() => <Friends/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route
                        path="/dialogs"
                        render={() => (<DialogsContainer
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
