import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";


let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogPage: DialogsReducer,
    sidebar: SidebarReducer
})

export let store = createStore(reducers)