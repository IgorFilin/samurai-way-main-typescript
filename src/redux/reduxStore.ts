import {applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./authReducer";
import MiddleWareThunk from "redux-thunk";


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    sidebar: SidebarReducer,
    userPage:UsersReducer,
    auth:AuthReducer
})

export let store = createStore(rootReducer,applyMiddleware(MiddleWareThunk))

// @ts-ignore
window.store = store

export type StateType =  ReturnType<typeof rootReducer>

export type DispatchType = Dispatch

// const state = store.getState()
// const dispatch = store.dispatch
// export type StateType = typeof state
// export type DispatchType = typeof dispatch