import {AllActionsCreators, DispatchTypeAppNewPostText, DispatchTypeAppPost, ProfilePageType} from "./store";
import {v1} from "uuid";

export const actionCreatorAddPost = (): DispatchTypeAppPost => ({type: 'ADD-POST'})

export const actionCreatorNewPostText = (text: string): DispatchTypeAppNewPostText => ({type: 'NEW-POST-TEXT', text})

let initialState: ProfilePageType = {
    addNewPostText: '',
    postData: [
        {id: v1(), text: 'Hello,Its my first post', likeCount: 10},
        {id: v1(), text: 'yoyoyo', likeCount: 12},
        {id: v1(), text: 'Welcome samurai!!', likeCount: 77},
    ]
}



const ProfileReducer = (state: ProfilePageType = initialState, action: AllActionsCreators) => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                addNewPostText: '',
                postData: [...state.postData, {id: v1(), text: state.addNewPostText, likeCount: 0}]
            }
        // state.postData.push({id: v1(), text: state.addNewPostText, likeCount: 0})
        // return state
        case 'NEW-POST-TEXT':
            // state.addNewPostText = action.text
            // return state
            return {...state,addNewPostText: action.text}
        default:
            return state
    }

}
export default ProfileReducer