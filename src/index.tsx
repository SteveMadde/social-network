import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store, {StoreRedaxType} from "./components/Redax/Redax";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



export let rerenderEntireTree = (store: StoreRedaxType) => {
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
