import {Dispatch} from "redux";
import {headerApi} from "../api/api";
import {FormDataTypeLogin} from "../components/Login/Login";


export type authReducerStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    errorMessages: null | string

}
export type setAuthUserType = ReturnType<typeof setAuthUser>
export type setErrorMessageType = ReturnType<typeof setErrorMessage>
export type AllActionsCreatorsTypeAuth = setAuthUserType | setErrorMessageType


const initialState: authReducerStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    errorMessages:null
}


export const AuthReducer = (state: authReducerStateType = initialState, action: AllActionsCreatorsTypeAuth): authReducerStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.idUser,
                login: action.payload.login,
                isAuth: action.payload.valueIsAuth
            }
        }
        case "SET-ERROR-MESSAGE":{
            return {...state,errorMessages:action.message}
        }


        default: {
            return state
        }
    }
};

export const setAuthUser = (idUser: number, login: string, email: string,valueIsAuth:boolean) => {
    return {type: 'SET-AUTH-USER', payload: {idUser, login, email,valueIsAuth}} as const
}
export const setErrorMessage = (message:string) => {
    return {type: 'SET-ERROR-MESSAGE', message } as const
}

export const AuthUserThunkCreator = () => {
    return (dispatch: Dispatch) => {
      return   headerApi.AuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUser(id, login, email,true))
                }
            })
    }
}

export const loginUserThunkCreator = (dataForm:FormDataTypeLogin) => {
    return (dispatch: Dispatch) => {
        headerApi.login(dataForm)
            .then(data => {
                if(data.resultCode === 0){
                    // @ts-ignore
                    dispatch(AuthUserThunkCreator())
                }else {
                    let messages = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    dispatch(setErrorMessage(messages))
                }
            })
    }
}
export const loginOutUserThunkCreator = () => {
    return (dispatch: Dispatch) => {
        headerApi.logOut()
            .then(data => {
                if(data.resultCode === 0){
                    // @ts-ignore
                    dispatch(setAuthUser(null,null,null,false))
                }
            })
    }
}
// {"data":{"userId":25406},"messages":[],"fieldsErrors":[],"resultCode":0}