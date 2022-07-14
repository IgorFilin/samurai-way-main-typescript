import {rerender} from "../Render";
import {v1} from "uuid";

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
    addMessage:string
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}


export const state = {
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
}

export const AddPost = () => {
    const newPost = {...state}
    newPost.ProfilePage.postData.push({id: v1(), text: state.ProfilePage.addNewPostText, likeCount: 0})
    state.ProfilePage.addNewPostText = ''
    rerender(newPost)
}

export const newPostText = (text: string) => {
    state.ProfilePage.addNewPostText = text
    rerender(state)
}

export const AddMessages = () => {
    let NewMessages = {...state}
    NewMessages.DialogPage.messagesData.push({id: v1(), messages: state.DialogPage.addMessage},)
    rerender(NewMessages)
    state.DialogPage.addMessage = ''
}

export const AddTextMessage = (text:string) => {
    state.DialogPage.addMessage = text
    rerender(state)
}