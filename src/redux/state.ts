export type stateType = {
    DialogPage: DialogPageType
    ProfilePage: ProfilePageType
    sidebar:SidebarType
}
export type postDataType = {
    id: number
    text: string
    likeCount:number
}

export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    messages: string
}

export type ProfilePageType = {
    postData: Array<postDataType>
}
export type SidebarType = {
    Samurai: Array<SamutaiType>
}
export type SamutaiType = {
     id:number
}
export type DialogPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}


export const state = {
    DialogPage: {
        dialogsData: [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Ivan'},
            {id: 3, name: 'Anya'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Alisa'}
        ],
        messagesData: [
            {id: 1, messages: 'Hi Samurai'},
            {id: 2, messages: 'YO YO'},
            {id: 3, messages: 'What are you doing?'},
            {id: 4, messages: 'Im sleep :))'},
            {id: 5, messages: 'Hello samurai'}
        ],
    },
    ProfilePage: {
        postData: [
            {id: 1, text: 'Hello,Its my first post', likeCount: 10},
            {id: 2, text: 'yoyoyo', likeCount: 12},
            {id: 3, text: 'Welcome samurai', likeCount: 77},
        ]
    },
    sidebar: {
        Samurai:[
            {id:1}
        ]
    }
}