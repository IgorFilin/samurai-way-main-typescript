export type authReducerStateType = {
    id: string | null
    login: string | null
    email: string | null
    isAuth:boolean

}
export type setAuthUserType = ReturnType<typeof setAuthUser>
export type AllActionsCreatorsType = setAuthUserType



// {"data":{"id":25406,"login":"IgorFilin","email":"filinigor@yandex.ru"},"messages":[],"fieldsErrors":[],"resultCode":0}
const initialState:authReducerStateType = {
    id: null,
    login: null,
    email: null,
    isAuth:false
}


export const AuthReducer = (state:authReducerStateType  = initialState, action: AllActionsCreatorsType):authReducerStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {...state,email:action.payload.email,id:action.payload.idUser,login:action.payload.login,isAuth:true}
        }
        default:{
            return state
        }
    }
};

export const setAuthUser = (idUser:string,login:string,email:string) => {
  return {type:'SET-AUTH-USER', payload:{idUser,login,email}} as const
}

