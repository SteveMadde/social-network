import axios from "axios";
import {UserType} from "./components/Redax/State";
import {DataType} from "./components/Header/auth_Reducer";

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '122609dd-9938-4137-ad99-47e873da8fe2'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

type getUsersResponseType = {
    items: UserType[]
    totalCount: number
}
export type AuthMeResponseType = {
    data: DataType
    resultCode: number
    messages: string[]
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | undefined
    }
}

type FollowResponseType = {
    resultCode: number
    messages: string[]
    data: any
}
export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    profile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    authMe() {
        return instance.get<AuthMeResponseType>(`auth/me`).then(response => {
            return response.data
        })
    },
    unFollow(userId: number) {
        return instance.delete<FollowResponseType>(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    follow(userId: number): Promise<FollowResponseType> {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    }
}
export const profileApi = {
    profile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    status(userId: string) {
        return instance.get(`profile/status/`+ userId)
    },
    statusUpdate(status: string) {
        return instance.put(`profile/status/` + {status: status})
    }
}


