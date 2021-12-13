import {
    ActionsTypes,
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS, TOGGLE_IS_FETCHING,
    UN_FOLLOW,
    UserType
} from "../components/Redax/State";


type InitStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number    //для стиля pages
    isFetching: boolean
}

export let initialState: InitStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
}

export const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            };
            case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT :
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
            case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: {
            return state
        }

    }
}
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
}) as const
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
}) as const
export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users: users
}) as const
export const follow = (userID: number) => ({
    type: FOLLOW,
    userID: userID
}) as const
export const unfollow = (userID: number) => ({
    type: UN_FOLLOW,
    userID: userID
}) as const