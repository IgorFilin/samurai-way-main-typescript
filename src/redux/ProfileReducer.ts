import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";
import {DispatchType} from "./reduxStore";

export type postDataType = {
    id: string
    text: string
    likeCount: number
}
export type ProfilePageType = {
    isLoading: boolean
    profileUser: ProfileUserType
    statusUser: string
    statusAuthUser: string
    postData: Array<postDataType>
}

export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
} | null
export type actionCreatorAddPostType = ReturnType<typeof actionCreatorAddPost>
export type setProfileUserType = ReturnType<typeof setProfileUser>
export type setIsLoadingType = ReturnType<typeof setIsLoading>
export type getStatusUserType = ReturnType<typeof getStatusUser>
export type updateAuthUserStatusType = ReturnType<typeof updateAuthUserStatus>
export type AllActionsCreatorsProfile =
    actionCreatorAddPostType
    | setProfileUserType
    | setIsLoadingType
    | getStatusUserType
    | updateAuthUserStatusType


let initialState: ProfilePageType = {
    isLoading: false,
    profileUser: null,
    statusUser: '',
    statusAuthUser: '',
    postData: [
        {id: v1(), text: 'Hello,Its my first post', likeCount: 10},
        {id: v1(), text: 'yoyoyo', likeCount: 12},
        {id: v1(), text: 'Welcome samurai!!', likeCount: 77},
    ]
}
export const ProfileReducer = (state: ProfilePageType = initialState, action: AllActionsCreatorsProfile): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                postData: [...state.postData, {id: v1(), text: action.post, likeCount: 0}]
            }

        case "SET-PROFILE-USER": {
            return {...state, profileUser: action.profileUser}
        }
        case "SET-IS-LOADING-PROFILE": {
            return {...state, isLoading: action.status}
        }
        case "GET-STATUS-USER": {
            return {...state, statusUser: action.status}
        }
        case "UPDATE-AUTH-USER-STATUS": {
            return {...state, statusUser: action.status}
        }
        default:
            return state
    }

}


export const actionCreatorAddPost = (post: string) => ({type: 'ADD-POST', post} as const)

export const setProfileUser = (profileUser: ProfileUserType) => {
    return {type: 'SET-PROFILE-USER', profileUser} as const
}
export const setIsLoading = (status: boolean) => {
    return {type: 'SET-IS-LOADING-PROFILE', status} as const
}
export const getStatusUser = (status: string) => {
    return {type: 'GET-STATUS-USER', status} as const
}
export const updateAuthUserStatus = (status: string) => {
    return {type: 'UPDATE-AUTH-USER-STATUS', status} as const
}
export const setProfileThunkCreator = (idUserProfile: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoading(true))
        profileApi.setProfileUser(idUserProfile)
            .then(data => {
                dispatch(setIsLoading(false))
                dispatch(setProfileUser(data))
            })
            .catch(err => {
                    console.warn(err)
                }
            )

    }
}

export const getStatusThunkCreator = (userId: string) => {
    return (dispatch: DispatchType) => {
        profileApi.getStatusUser(userId)
            .then(status => dispatch(getStatusUser(status)))
    }
}

export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: DispatchType) => {
        profileApi.updateStatusUser(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(updateAuthUserStatus(status))
                }
            })
    }
}

