export type UserType = {
    id: string
    followed: boolean
    status: string
    photos: {
        small:null | string
        large:null | string
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

export type AllActionCreatorsType = follow | unFollow | SetUserACType | SetPageACType | SetUserCountACType | SetLoadingACType


let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSizeUsers: 5,
    totalUserCount: 20,
    isLoading:false
}


export const UsersReducer = (state: InitialStateType = initialState, action: AllActionCreatorsType): InitialStateType => {
debugger
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.idUser ? {...user, followed: true} : user)
            }
        }
        case 'UN-FOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.idUser ? {...user, followed: false} : user)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...action.users]}
        }
        case "SET-PAGE": {
            return   {...state, currentPage: action.pageNumber}

        }
        case "SET-USER-COUNT": {
            return {...state, totalUserCount: action.userCount}
        }
        case "SET-LOADING": {
            return {...state,isLoading: action.status}
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
export const SetLoading = (statusLoading:boolean) => {
    return {type: 'SET-LOADING', status:statusLoading} as const
}