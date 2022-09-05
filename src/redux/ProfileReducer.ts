import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

export type postDataType = {
    id: string
    text: string
    likeCount: number
}
export type ProfilePageType = {
    isLoading: boolean
    profileUser: ProfileUserType
    addNewPostText: string
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
export type actionCreatorNewPostTextType = ReturnType<typeof actionCreatorNewPostText>
export type setProfileUserType = ReturnType<typeof setProfileUser>
export type SetIsLoadingType = ReturnType<typeof SetIsLoading>
export type AllActionsCreators =
    actionCreatorAddPostType
    | actionCreatorNewPostTextType
    | setProfileUserType
    | SetIsLoadingType


let initialState: ProfilePageType = {
    isLoading: false,
    profileUser: null,
    addNewPostText: '',
    postData: [
        {id: v1(), text: 'Hello,Its my first post', likeCount: 10},
        {id: v1(), text: 'yoyoyo', likeCount: 12},
        {id: v1(), text: 'Welcome samurai!!', likeCount: 77},
    ]
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: AllActionsCreators): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                addNewPostText: '',
                postData: [...state.postData, {id: v1(), text: state.addNewPostText, likeCount: 0}]
            }
        case 'NEW-POST-TEXT':
            return {...state, addNewPostText: action.text}
        case "SET-PROFILE-USER": {
            return {...state, profileUser: action.profileUser}
        }
        case "SET-IS-LOADING-PROFILE": {
            return {...state, isLoading: action.status}
        }
        default:
            return state
    }

}


export const actionCreatorAddPost = () => ({type: 'ADD-POST'} as const)


export const actionCreatorNewPostText = (text: string) => ({type: 'NEW-POST-TEXT', text} as const)

export const setProfileUser = (profileUser: ProfileUserType) => {
    return {type: 'SET-PROFILE-USER', profileUser} as const
}
export const SetIsLoading = (status: boolean) => {
    return {type: 'SET-IS-LOADING-PROFILE', status} as const
}

export const setProfileThunkCreator = (params: string) => {
    return (dispatch: Dispatch) => {
        dispatch(SetIsLoading(true))
        profileApi.setProfileUser(params)
            .then(data => {
                dispatch(SetIsLoading(false))
                dispatch(setProfileUser(data))
            })
    }
}

