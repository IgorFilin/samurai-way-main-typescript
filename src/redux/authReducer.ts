import {Dispatch} from "redux";
import {headerApi} from "../api/api";
import {FormDataType} from "../components/Login";

export type authReducerStateType = {
    id: string | null
    login: string | null
    email: string | null
    isAuth: boolean

}
export type setAuthUserType = ReturnType<typeof setAuthUser>
export type setAuthLoginUserType = ReturnType<typeof setAuthLoginUser>
export type AllActionsCreatorsType = setAuthUserType | setAuthLoginUserType


const initialState: authReducerStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const AuthReducer = (state: authReducerStateType = initialState, action: AllActionsCreatorsType): authReducerStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.idUser,
                login: action.payload.login,
                isAuth: true
            }
        }
        case "SET-AUTH-LOGIN-USER":{
            return {...state,isAuth:true}
        }
        default: {
            return state
        }
    }
};

export const setAuthUser = (idUser: string, login: string, email: string) => {
    return {type: 'SET-AUTH-USER', payload: {idUser, login, email}} as const
}
export const setAuthLoginUser = () => {
    return {type: 'SET-AUTH-LOGIN-USER'} as const
}
export const AuthUserThunkCreator = () => {
    return (dispatch: Dispatch) => {
        headerApi.AuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUser(id, login, email))
                }
            })
    }
}

export const AuthorizeUserThunkCreator = (dataForm:FormDataType) => {
    return (dispatch: Dispatch) => {
        headerApi.AuthorizeUser(dataForm)
            .then(data => {
                if(data.resultCode === 0){
                    setAuthLoginUser()
                }
            })
    }
}
// {"data":{"userId":25406},"messages":[],"fieldsErrors":[],"resultCode":0}