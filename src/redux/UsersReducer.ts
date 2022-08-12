import {v1} from "uuid";

export type UserType = {
    id: string
    followed: boolean
    status:string
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
export type AllActionCreatorsType = ChangeSubscriptionACType | SetUserACType


let initialState = {
    users: [] as Array<UserType>
}



export const UsersReducer = (state: InitialStateType = initialState, action: AllActionCreatorsType): InitialStateType => {

    switch (action.type) {
        case 'CHANGE-SUBSCRIPTION':
            return {...state,users: state.users.map(user => user.id === action.idUser? {...user,statusFollow:!user.followed}:user)}
        case "SET-USERS":
            return { ...state, users: action.users }
        default:
            return state
    }

}

export const ChangeSubscriptionAC =(idUser:string)=> {
    return {type:'CHANGE-SUBSCRIPTION',idUser} as const
}
export const SetUserAC = (users:Array<UserType>) => {
    return {type:'SET-USERS',users} as const
}