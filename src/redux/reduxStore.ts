import {combineReducers, createStore, Dispatch} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";


let rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogPage: DialogsReducer,
    sidebar: SidebarReducer,
    userPage:UsersReducer
})

export let store = createStore(rootReducer)

// @ts-ignore
window.store = store

export type StateType =  ReturnType<typeof rootReducer>

export type DispatchType = Dispatch

// const state = store.getState()
// const dispatch = store.dispatch
// export type StateType = typeof state
// export type DispatchType = typeof dispatch