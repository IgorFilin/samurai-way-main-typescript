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
    newPostText: string
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
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}


export const state = {
    DialogPage: {
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
        newPostText: '',
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

export const AddPost = (text: string) => {
    const newPost = {id: v1(), text: text, likeCount: 0}
    state.ProfilePage.postData.push(newPost)
    rerender(state)
}

export const newPostText = (text: string) => {
    state.ProfilePage.newPostText = text
    rerender(state)
}