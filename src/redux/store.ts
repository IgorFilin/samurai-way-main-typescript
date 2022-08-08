import {v1} from "uuid";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";

export type stateType = {
    DialogPage: DialogPageType
    ProfilePage: ProfilePageType
    sidebar: SidebarType
}
export type postDataType = {
    id: string
    text: string
    likeCount: number
}
export type dialogsDataType = {
    id: string
    name: string
}
export type messagesDataType = {
    id: string
    messages: string
}
export type ProfilePageType = {
    addNewPostText: string
    postData: Array<postDataType>
}
export type SidebarType = {
    friendsData: Array<friendsDataType>
}
export type friendsDataType = {
    id: string
    name: string
}
export type DialogPageType = {
    addMessage: string
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
export type DispatchTypeAppPost = {
    type: 'ADD-POST'
}
export type DispatchTypeAppNewPostText = {
    type: 'NEW-POST-TEXT'
    text: string
}
export type DispatchTypeAppAddTextMessage = {
    type: 'ADD-TEXT-MESSAGE'
    text: string
}
export type DispatchTypeAppAddMessage = {
    type: 'ADD-MESSAGE'

}
export type StoreType = {
    _state: stateType
    getState: () => stateType
    _rerenderEntireTree: () => void
    _addPost: () => void
    _newPostText: (t: string) => void
    _addTextMessage: (t: string) => void
    _addMessages: () => void
    subscribe: (fn: () => void) => void
    dispatch: (a: DispatchTypeAppPost | DispatchTypeAppNewPostText | DispatchTypeAppAddTextMessage | DispatchTypeAppAddMessage) => void
}
export type AllActionsCreators =
    DispatchTypeAppPost
    | DispatchTypeAppNewPostText
    | DispatchTypeAppAddTextMessage
    | DispatchTypeAppAddMessage


export const store: StoreType = {
    _state: {
        DialogPage: {
            addMessage: '',
            dialogsData: [
                {id: v1(), name: 'Igor'},
                {id: v1(), name: 'Ivan'},
                {id: v1(), name: 'Anya'},
                {id: v1(), name: 'Valera'},
                {id: v1(), name: 'Alisa'}
            ],
            messagesData: [
                {id: v1(), messages: 'Hi Samurai'},
                {id: v1(), messages: 'YO YO'},
                {id: v1(), messages: 'What are you doing?'},
                {id: v1(), messages: 'Im sleep :))'},
                {id: v1(), messages: 'Hello samurai'}
            ],
        },
        ProfilePage: {
            addNewPostText: '',
            postData: [
                {id: v1(), text: 'Hello,Its my first post', likeCount: 10},
                {id: v1(), text: 'yoyoyo', likeCount: 12},
                {id: v1(), text: 'Welcome samurai', likeCount: 77},
            ]
        },
        sidebar: {
            friendsData: [
                {id: v1(), name: 'Igor'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Max'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer

    },
    _addPost() {
        const newPost = {...this._state}
        newPost.ProfilePage.postData.push({id: v1(), text: this._state.ProfilePage.addNewPostText, likeCount: 0})
        this._state.ProfilePage.addNewPostText = ''
        this._rerenderEntireTree()
    },
    _newPostText(text: string) {
        this._state.ProfilePage.addNewPostText = text
        this._rerenderEntireTree()
    },
    _addTextMessage(text: string) {
        this._state.DialogPage.addMessage = text
        this._rerenderEntireTree()
    },
    _addMessages() {
        let NewMessages = {...this._state}
        NewMessages.DialogPage.messagesData.push({id: v1(), messages: this._state.DialogPage.addMessage},)
        this._rerenderEntireTree()
        this._state.DialogPage.addMessage = ''
    },
    dispatch(action) {
        debugger
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
        this._state.DialogPage = DialogsReducer(this._state.DialogPage, action)
        this._state.sidebar = SidebarReducer(this._state.sidebar, action)

    }

}




