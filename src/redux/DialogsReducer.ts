import {v1} from "uuid";

export type dialogsDataType = {
    id: string
    name: string
}
export type messagesDataType = {
    id: string
    messages: string
}
export type DialogPageType = {
    // addMessage: string
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
export type actionCreatorAddMessagesType = ReturnType<typeof actionCreatorAddMessages>
export type AllActionsCreatorsType =  actionCreatorAddMessagesType

let initialState = {
    dialogsData: [
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Anya'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Alisa'}
    ] as Array<dialogsDataType>,
    messagesData: [
        {id: v1(), messages: 'Hi Samurai'},
        {id: v1(), messages: 'YO YO'},
        {id: v1(), messages: 'What are you doing?'},
        {id: v1(), messages: 'Im sleep :))'},
        {id: v1(), messages: 'Hello samurai'}
    ] as Array<messagesDataType>,
}
export type initialStateType = typeof initialState


export const DialogsReducer = (state: initialStateType = initialState, action: AllActionsCreatorsType): DialogPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), messages: action.messages}]
            }
        default:
            return state

    }

}


export const actionCreatorAddMessages = (messages:string) => ({type: "ADD-MESSAGE",messages}as const)

