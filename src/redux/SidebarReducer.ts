import {AllActionsCreators, SidebarType} from "./store";
import {v1} from "uuid";


let initialState: SidebarType = {
    friendsData: [
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Max'}
    ]
}


const SidebarReducer = (state: SidebarType = initialState, action: AllActionsCreators) => {
    return state
}
export default SidebarReducer