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
export type ChangeSubscriptionACType = ReturnType<typeof ChangeSubscriptionAC>
export type SetUserACType = ReturnType<typeof SetUserAC>
export  type SetPageACType = ReturnType<typeof SetPageAC>
export type SetUserCountACType = ReturnType<typeof SetUserCountAC>


export type AllActionCreatorsType = ChangeSubscriptionACType | SetUserACType | SetPageACType | SetUserCountACType


let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSizeUsers: 5,
    totalUserCount: 20
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
        default:
            return state
    }

}


export const ChangeSubscriptionAC = (idUser: string) => {
    return {type: 'CHANGE-SUBSCRIPTION', idUser} as const
}
export const SetUserAC = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users} as const
}
export const SetPageAC = (pageNumber: number) => {
    return {type: 'SET-PAGE', pageNumber} as const
}
export const SetUserCountAC = (userCount: number) => {
    return {type: 'SET-USER-COUNT', userCount} as const
}