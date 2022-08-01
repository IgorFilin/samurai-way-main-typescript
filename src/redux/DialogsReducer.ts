import {
    AllActionsCreators,
    DialogPageType,
    DispatchTypeAppAddMessage,
    DispatchTypeAppAddTextMessage, DispatchTypeAppNewPostText,
    DispatchTypeAppPost,
    stateType
} from "./store";
import {v1} from "uuid";


export const actionCreatorAddTextMessage = (text: string): DispatchTypeAppAddTextMessage => ({
    type: "ADD-TEXT-MESSAGE",
    text
})

export const actionCreatorAddMessages = (): DispatchTypeAppAddMessage => ({type: "ADD-MESSAGE"})
let initialState: DialogPageType = {
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
}
const DialogsReducer = (state: DialogPageType = initialState, action: AllActionsCreators) => {

    switch (action.type) {
        case 'ADD-TEXT-MESSAGE':
            state.addMessage = action.text
            return state
        case 'ADD-MESSAGE':
            return {
                ...state,
                addMessage: '',
                messagesData: [...state.messagesData, {id: v1(), messages: state.addMessage}]
            }
        default:
            return state
        // state.messagesData.push({id: v1(), messages: state.addMessage},)
        // state.addMessage = ''
        // return state
    }

}

export default DialogsReducer