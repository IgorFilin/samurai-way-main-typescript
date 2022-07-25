import {AllActionsCreators, DispatchTypeAppNewPostText, DispatchTypeAppPost, ProfilePageType} from "./state";
import {v1} from "uuid";

export const actionCreatorAddPost = (): DispatchTypeAppPost => ({type: 'ADD-POST'})

export const actionCreatorNewPostText = (text: string): DispatchTypeAppNewPostText => ({type: 'NEW-POST-TEXT', text})

const ProfileReducer = (state: ProfilePageType, action: AllActionsCreators) => {
    switch (action.type) {
        case 'ADD-POST':
            state.postData.push({id: v1(), text: state.addNewPostText, likeCount: 0})
            state.addNewPostText = ''
            return state
        case 'NEW-POST-TEXT':
            state.addNewPostText = action.text
            return state
    }
    return state
}
export default ProfileReducer