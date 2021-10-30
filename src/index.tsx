import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {store, StoreType} from "./components/Redax/State";


export let rerenderEntireTree = ( store: StoreType ) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        DialogsPage={store._State.DialogsPage}
        ProfilePage={store._State.ProfilePage}
        addDialog={store.addDialog.bind(store)}
        addPost={store.addPost.bind(store)}
        changeNewPostText={store.changeNewPostText.bind(store)}
        dispatch={store.dispatch.bind(store)}
        />
    </React.StrictMode>,
    document.getElementById("root"),
  );
};
rerenderEntireTree(store);
