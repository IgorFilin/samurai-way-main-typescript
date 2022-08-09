import {v1} from "uuid";

export type postDataType = {
    id: string
    text: string
    likeCount: number
}
export type ProfilePageType = {
    addNewPostText: string
    postData: Array<postDataType>
}
export type actionCreatorAddPostType = ReturnType<typeof actionCreatorAddPost>
export type actionCreatorNewPostTextType = ReturnType<typeof actionCreatorNewPostText>
export type AllActionsCreators = actionCreatorAddPostType | actionCreatorNewPostTextType


let initialState: ProfilePageType = {
    addNewPostText: '',
    postData: [
        {id: v1(), text: 'Hello,Its my first post', likeCount: 10},
        {id: v1(), text: 'yoyoyo', likeCount: 12},
        {id: v1(), text: 'Welcome samurai!!', likeCount: 77},
    ]
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: AllActionsCreators): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                addNewPostText: '',
                postData: [...state.postData, {id: v1(), text: state.addNewPostText, likeCount: 0}]
            }
        case 'NEW-POST-TEXT':
            return {...state, addNewPostText: action.text}
        default:
            return state
    }

}


export const actionCreatorAddPost = () => ({type: 'ADD-POST'} as const)


export const actionCreatorNewPostText = (text: string) => ({type: 'NEW-POST-TEXT', text}as const)

