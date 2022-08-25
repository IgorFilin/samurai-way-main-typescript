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
    addMessage: string
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
export type actionCreatorAddTextMessageType = ReturnType<typeof actionCreatorAddTextMessage>
export type actionCreatorAddMessagesType = ReturnType<typeof actionCreatorAddMessages>
export type AllActionsCreatorsType = actionCreatorAddTextMessageType | actionCreatorAddMessagesType

let initialState = {
    addMessage: '',
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
        case 'ADD-TEXT-MESSAGE':
            return {...state, addMessage: action.text}
        case 'ADD-MESSAGE':
            return {
                ...state,
                addMessage: '',
                messagesData: [...state.messagesData, {id: v1(), messages: state.addMessage}]
            }
        default:
            return state

    }

}

export const actionCreatorAddTextMessage = (text: string) => ({
    type: "ADD-TEXT-MESSAGE",
    text
}as const )

export const actionCreatorAddMessages = () => ({type: "ADD-MESSAGE"}as const)

