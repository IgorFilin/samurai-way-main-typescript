export type UserType = {
    id: string
    followed: boolean
    status: string
    photos: string
    name: string
    location: {
        country: string
        city: string
    }
}
export type InitialStateType = typeof initialState
export type ChangeSubscriptionACType = ReturnType<typeof ChangeSubscription>
export type SetUserACType = ReturnType<typeof SetUser>
export  type SetPageACType = ReturnType<typeof SetPage>
export type SetUserCountACType = ReturnType<typeof SetUserCount>
export type SetLoadingACType = ReturnType<typeof SetLoading>

export type AllActionCreatorsType = ChangeSubscriptionACType | SetUserACType | SetPageACType | SetUserCountACType | SetLoadingACType


let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSizeUsers: 5,
    totalUserCount: 20,
    isLoading:false
}


export const UsersReducer = (state: InitialStateType = initialState, action: AllActionCreatorsType): InitialStateType => {

    switch (action.type) {
        case 'CHANGE-SUBSCRIPTION': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.idUser ? {...user, followed: !user.followed} : user)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...action.users]}//!![]
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


export const ChangeSubscription = (idUser: string) => {
    return {type: 'CHANGE-SUBSCRIPTION', idUser} as const
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