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
    addMessage: string
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
export type StoreType = {
    _state: stateType
    getState: () => stateType
    _rerenderEntireTree: () => void
    AddPost: () => void
    newPostText: (t: string) => void
    AddTextMessage: (t: string) => void
    AddMessages: () => void
    subscribe: (fn: () => void) => void
}

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
    AddPost() {
        const newPost = {...this._state}
        newPost.ProfilePage.postData.push({id: v1(), text: this._state.ProfilePage.addNewPostText, likeCount: 0})
        this._state.ProfilePage.addNewPostText = ''
        this._rerenderEntireTree()
    },
    newPostText(text: string) {
        this._state.ProfilePage.addNewPostText = text
        this._rerenderEntireTree()
    },
    AddTextMessage(text: string) {
        this._state.DialogPage.addMessage = text
        this._rerenderEntireTree()
    },
    AddMessages() {
        let NewMessages = {...this._state}
        NewMessages.DialogPage.messagesData.push({id: v1(), messages: this._state.DialogPage.addMessage},)
        this._rerenderEntireTree()
        this._state.DialogPage.addMessage = ''
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer

    }
}