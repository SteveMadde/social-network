import {
    setTotalUsersCount,
    setUsers,
    setCurrentPage,
    follow,
    toggleIsFetching,
    unfollow, toggleFollowingProgress
} from "../../Users/Users_Reducer";
import {setStatus, setUserProfile} from "../Profile/Profile_Reducer";
import {setAuthUserData} from "../Header/auth_Reducer";

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
export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocation
}
export type UsersLocation = {
    city: string
    country: string
}
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
    getState: () => RootStateType
}

export const ADD_POST = "ADD_POST"
export const SET_STATUS = "SET_STATUS"
export const SET_USER_DATA = "SET_USER_DATA"
export const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT"
export const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE"
export const ADD_DIALOG_MESSAGE = "ADD_DIALOG_MESSAGE"
export const FOLLOW = "FOLLOW"
export const UN_FOLLOW = "UN_FOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
/*export let store: StoreType = {
    getState() {
        return this._State
    },
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
    }

}*/
/*    addPost(PostMessage: string) {
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
}*/
type setStatusACType = ReturnType<typeof setStatus>
type toggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>
type setCurrentACType = ReturnType<typeof setCurrentPage>
type setAuthUserDataACType = ReturnType<typeof setAuthUserData>
type isFetchingACType = ReturnType<typeof toggleIsFetching>
type setTotalUsersCount = ReturnType<typeof setTotalUsersCount>
type setUsersACType = ReturnType<typeof setUsers>
type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type setUserProfileACType = ReturnType<typeof setUserProfile>
type addPostACType = ReturnType<typeof addPostAC>
type changeNewTextACType = ReturnType<typeof changeNewTextAC>
type changeDialogMessageACType = ReturnType<typeof changeDialogMessageAC>
type addDialogMessageACType = ReturnType<typeof addDialogMessageAC>
export type ActionsTypes =
    setStatusACType
    | toggleFollowingProgressACType
    | setAuthUserDataACType
    | setUserProfileACType
    | isFetchingACType
    | setTotalUsersCount
    | setCurrentACType
    | unfollowACType
    | followACType
    | setUsersACType
    | changeDialogMessageACType
    | addDialogMessageACType
    | changeNewTextACType
    | addPostACType
export const addPostAC = () => ({
    type: ADD_POST,
}) as const
export let changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export let changeDialogMessageAC = (newMessage: string) => {
    return {
        type: CHANGE_NEW_MESSAGE,
        newMessage: newMessage
    } as const
}
export let addDialogMessageAC = () => {
    return {
        type: ADD_DIALOG_MESSAGE,
    } as const
}
