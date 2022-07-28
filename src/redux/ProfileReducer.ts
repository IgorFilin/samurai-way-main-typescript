import {AllActionsCreators, DispatchTypeAppNewPostText, DispatchTypeAppPost, ProfilePageType} from "./state";
import {v1} from "uuid";

export const actionCreatorAddPost = (): DispatchTypeAppPost => ({type: 'ADD-POST'})

export const actionCreatorNewPostText = (text: string): DispatchTypeAppNewPostText => ({type: 'NEW-POST-TEXT', text})

const ProfileReducer = (state: ProfilePageType, action: AllActionsCreators) => {
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
            state.addNewPostText = action.text
            return state
    }
    return state
}
export default ProfileReducer