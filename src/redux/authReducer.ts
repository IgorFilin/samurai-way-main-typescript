import {Dispatch} from "redux";
import {headerApi} from "../api/api";
import {FormDataTypeLogin} from "../components/Login/Login";
import {stopSubmit} from "redux-form";

export type authReducerStateType = {
    id: string | null
    login: string | null
    email: string | null
    isAuth: boolean

}
export type setAuthUserType = ReturnType<typeof setAuthUser>
export type AllActionsCreatorsTypeAuth = setAuthUserType


const initialState: authReducerStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
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

        default: {
            return state
        }
    }
};

export const setAuthUser = (idUser: string, login: string, email: string,valueIsAuth:boolean) => {
    return {type: 'SET-AUTH-USER', payload: {idUser, login, email,valueIsAuth}} as const
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
                    dispatch(stopSubmit('login',{_error:messages}))
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