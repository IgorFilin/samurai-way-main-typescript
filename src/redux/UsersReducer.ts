import {headerApi, userApi} from "../api/api";
import {Dispatch} from "redux";

export type UserType = {
    id: string
    followed: boolean
    status: string
    photos: {
        small: null | string
        large: null | string
    }
    name: string
    location: {
        country: string
        city: string
    }
}
export type InitialStateType = typeof initialState
export type follow = ReturnType<typeof follow>
export type unFollow = ReturnType<typeof unFollow>
export type SetUserACType = ReturnType<typeof SetUser>
export  type SetPageACType = ReturnType<typeof SetPage>
export type SetUserCountACType = ReturnType<typeof SetUserCount>
export type SetLoadingACType = ReturnType<typeof SetLoading>
export type SetLoadingFollowUnFollowType = ReturnType<typeof SetLoadingFollowUnFollow>

export type AllActionCreatorsType =
    follow
    | unFollow
    | SetUserACType
    | SetPageACType
    | SetUserCountACType
    | SetLoadingACType
    | SetLoadingFollowUnFollowType


let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSizeUsers: 5,
    totalUserCount: 20,
    isLoading: false,
    isLoadingFollowUnFollow: false,
    arrayUsersIdForDisabledButton: [] as Array<string>
}


export const UsersReducer = (state: InitialStateType = initialState, action: AllActionCreatorsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            debugger
            return {
                ...state,
                users: state.users.map(user => user.id === action.idUser ? {...user, followed: true} : user),

            }
        }
        case 'UN-FOLLOW': {
            debugger
            return {
                ...state,
                users: state.users.map(user => user.id === action.idUser ? {...user, followed: false} : user),

            }
        }
        case "SET-USERS": {
            return {...state, users: [...action.users]}
        }
        case "SET-PAGE": {
            return {...state, currentPage: action.pageNumber}

        }
        case "SET-USER-COUNT": {
            return {...state, totalUserCount: action.userCount}
        }
        case "SET-LOADING": {
            return {...state, isLoading: action.status}
        }
        case "SET-LOADING-FOLLOW-UNFOLLOW": {
            return {
                ...state,
                arrayUsersIdForDisabledButton: action.status ?
                    [...state.arrayUsersIdForDisabledButton, action.idUser] :
                    state.arrayUsersIdForDisabledButton.filter(id => id !== action.idUser)

            }
        }
        default:
            return state
    }

}


export const follow = (idUser: string) => {
    return {type: 'FOLLOW', idUser} as const
}
export const unFollow = (idUser: string) => {
    return {type: 'UN-FOLLOW', idUser} as const
}
export const SetUser = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users} as const
}
export const SetPage = (pageNumber: number) => {
    return {type: 'SET-PAGE', pageNumber} as const
}
export const SetUserCount = (userCount: number) => {
    return {type: 'SET-USER-COUNT', userCount} as const
}
export const SetLoading = (statusLoading: boolean) => {
    return {type: 'SET-LOADING', status: statusLoading} as const
}
export const SetLoadingFollowUnFollow = (status: boolean, idUser: string) => {
    return {type: 'SET-LOADING-FOLLOW-UNFOLLOW',  status, idUser} as const
}

export const getUserThunkCreator = (pageSizeUsers:number,currentPage:number) => {
    return (dispatch:Dispatch) => {
        dispatch(SetLoading(true))
        userApi.getUsers(pageSizeUsers, currentPage)
            .then(data => {
                dispatch(SetLoading(false))
                dispatch(SetUser(data.items))
                dispatch(SetUserCount(data.totalCount))
            })
    }
}

export const followThunkCreator = (userID:string) => {
    return (dispatch:Dispatch) => {
        dispatch(SetLoadingFollowUnFollow(true,userID))
        userApi.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userID))
                    dispatch(SetLoadingFollowUnFollow(false, userID))
                }
            })
    }
}

export const unFollowThunkCreator = (userID:string) => {
    return (dispatch:Dispatch) => {
        dispatch(SetLoadingFollowUnFollow(true,userID))
        userApi.unFollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(userID))
                    dispatch(SetLoadingFollowUnFollow(false, userID))
                }
            })
    }
}


export const setPageThunkCreator = (pageSizeUsers:number,page:number) => {
    return (dispatch:Dispatch)=> {
        dispatch(SetLoading(true))
        userApi.setPage(pageSizeUsers, page)
            .then(data => {
                dispatch(SetLoading(false))
                dispatch(SetUser(data.items))
                dispatch(SetUserCount(data.totalCount))
            })
        dispatch(SetPage(page))
    }

}
