import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {store, StoreType} from "./components/Redax/State";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";
/*
import {Provider} from "react-redux";
*/


export let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById("root"),
    );
};
rerenderEntireTree(store);
