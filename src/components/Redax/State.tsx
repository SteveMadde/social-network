
import {rerenderEntireTree} from "../../index";
import {profileReducer} from "../Profile/Profile_Reducer";
import {dialogReducer} from "../Dialogs/Dialogs_Reducer";

export type PostType = {
    id: number;
    post: string;
};
export type PostsType = {
    posts: PostType;
    newPostText: string
};
export type ProfilePageType = {
    posts: Array<PostType>;
    newPostText: string
};
export type MessagesType = {
    id: number;
    message: string;
};
export type DialogsType = {
    id: number;
    name: string;
};
export type DialogsPageType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
    newMessage: string
};
export type RootStateType = {
    DialogsPage: DialogsPageType;
    ProfilePage: ProfilePageType;
};

export type StoreType = {
    _State: RootStateType
    changeNewPostText: (newText: string) => void
    addPost: (PostMessage: string) => void;
    addDialog: (DialogMessage: string) => void;
    changeNewMessage: (newMessage: string) => void
    dispatch: (action: ActionsTypes) => void
}
/*export type DispatchPropsType = {
    changeNewPostText: (newText: string) => void
    addPost: (PostMessage: string) => void;
    addDialog: (DialogMessage: string) => void;
}*/


export const ADD_POST = "ADD_POST"
export const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT"
export const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE"
export const ADD_DIALOG_MESSAGE = "ADD_DIALOG_MESSAGE"




export let store: StoreType = {
    _State: {
        ProfilePage: {
            posts: [
                {id: 1, post: "My first post"},
                {id: 2, post: "Hallo"},
                {id: 2, post: "123fg"},
            ],
            newPostText: 'privet ya strtoka',
        },
        DialogsPage: {
            dialogs: [
                {id: 0, name: "Vladik"},
                {id: 1, name: "Ruslan"},
                {id: 2, name: "Natasha"},
                {id: 3, name: "Kiron"},
                {id: 4, name: "Artur"},
                {id: 5, name: "Roma"},
            ],
            messages: [
                {id: 0, message: "First post"},
                {id: 1, message: "bla bl"},
                {id: 2, message: "badya badya"},
            ],
            newMessage: '',
        }
    },
    addPost(PostMessage: string) {
        let newPost: PostType = {
            id: 7,
            post: PostMessage,
        };
        this._State.ProfilePage.posts.push(newPost);
        rerenderEntireTree(this)
    },
    changeNewPostText(newText: string) {
        this._State.ProfilePage.newPostText = newText;
        rerenderEntireTree(this)
    },

    addDialog(DialogsMessage: string) {
        let newDialog: MessagesType = {
            id: 7,
            message: DialogsMessage,
        };
        this._State.DialogsPage.messages.push(newDialog);
        rerenderEntireTree(this)
    },
    changeNewMessage(newMessage: string) {
        this._State.DialogsPage.newMessage = newMessage
        rerenderEntireTree(this)
    },
    dispatch(action) {
        this._State.ProfilePage = profileReducer(this._State.ProfilePage, action)
        this._State.DialogsPage = dialogReducer(this._State.DialogsPage, action)
        rerenderEntireTree(this)
    }
/*        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 7,
                post: action.PostMessage,
            };
            rerenderEntireTree(this)
            this._State.ProfilePage.posts.push(newPost);
        } else if (action.type === 'CHANGE_NEW_POST_TEXT') {
            this._State.ProfilePage.newPostText = action.newText;
            rerenderEntireTree(this)
        } else if (action.type === 'CHANGE_NEW_MESSAGE') {
            this._State.DialogsPage.newMessage = action.newMessage
            rerenderEntireTree(this)
        } else if (action.type ===  'ADD_DIALOG_MESSAGE') {
            let newMessage: MessagesType = {
                id: 1,
                message: action.dialogMessage
            }
            this._State.DialogsPage.messages.push(newMessage)
            rerenderEntireTree(this)
        }
    }*/
}

type addPostACType = ReturnType<typeof addPostAC>
type changeNewTextACType = ReturnType<typeof changeNewTextAC>
type changeDialogMessageACType = ReturnType<typeof changeDialogMessageAC>
type addDialogMessageACType = ReturnType<typeof addDialogMessageAC>
export type ActionsTypes = changeDialogMessageACType | addDialogMessageACType | changeNewTextACType | addPostACType

export const addPostAC = (PostMessage: string) => ({
        type: ADD_POST,
        PostMessage: PostMessage
    }) as const

export let changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export let changeDialogMessageAC = (newMessage: string) => {
    return {
        type:CHANGE_NEW_MESSAGE,
        newMessage: newMessage
    } as const
}
export let addDialogMessageAC = (Message: string) => {
    return {
        type: ADD_DIALOG_MESSAGE,
        dialogMessage: Message
    } as const
}




/*export let State: RootStateType = {
  ProfilePage: {
    posts: [
      {id: 1, post: "My first post"},
      {id: 2, post: "Hallo"},
      {id: 2, post: "123fg"},
    ],
    newPostText: 'privet ya strtoka',
  },
  addPost: (PostMessage: string) => {
    let newPost: PostType = {
      id: 7,
      post: PostMessage,
    };
    State.ProfilePage.posts.push(newPost);
    rerenderEntireTree(State);
  },


  DialogsPage: {
    dialogs: [
      {id: 0, name: "Vladik"},
      {id: 1, name: "Ruslan"},
      {id: 2, name: "Natasha"},
      {id: 3, name: "Kiron"},
      {id: 4, name: "Artur"},
      {id: 5, name: "Roma"},
    ],
    messages: [
      {id: 0, message: "First post"},
      {id: 1, message: "bla bl"},
      {id: 2, message: "badya badya"},
    ],
  },
  addDialog: (DialogsMessage: string) => {
    let newDialog: MessagesType = {
      id: 7,
      message: DialogsMessage,
    };
    State.DialogsPage.messages.push(newDialog);
    rerenderEntireTree(State);
  },
};
 export let changeNewPostText = (newText: string) => {
    State.ProfilePage.newPostText = newText;
    rerenderEntireTree(State);
};*/

/*export let addPost = (PostMessage: string) => {
  let newPost: PostType = {
    id: 7,
    post: PostMessage,
  };
  State.ProfilePage.posts.push(newPost);
  console.log(State.ProfilePage.posts);
};
export let addDialog = (DialogsMessage: string) => {
  let newDialog: MessagesType = {
    id: 7,
    message: DialogsMessage,
  };
  State.DialogsPage.messages.push(newDialog);
  console.log(State.DialogsPage.messages);
};*/
