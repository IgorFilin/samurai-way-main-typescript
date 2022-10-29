import {AuthUserThunkCreator} from "./authReducer";
import {AppDispatch, StateType} from "./reduxStore";
import {setProfileThunkCreator} from "./ProfileReducer";

type initialStateType = typeof initialState
type initializationMeACType = ReturnType<typeof initializationMeAC>
export type AllActionsCreatorsTypeApp = initializationMeACType
const initialState = {
    initializationValue: false
}

export const appReducer = (state: initialStateType = initialState, action: AllActionsCreatorsTypeApp): initialStateType => {
    switch (action.type) {
        case 'INITIALIZATION-ME': {
            return {
                ...state,
                initializationValue: true
            }
        }

        default: {
            return state
        }
    }
};

export const initializationMeAC = () => {
    return {type: 'INITIALIZATION-ME'} as const
}

export const initializationMeThunkCreator = () => async (dispatch: AppDispatch, getState: () => StateType) => {
    try {
        await dispatch(AuthUserThunkCreator())
        if (getState().auth.id) {
            const idAuthUser = getState().auth.id
            dispatch(setProfileThunkCreator(String(idAuthUser)))
        }
        dispatch(initializationMeAC())

    } catch (err) {
        console.warn(err)
    }


}

