import {
    AllActionsCreators,
    DialogPageType,
    DispatchTypeAppAddMessage,
    DispatchTypeAppAddTextMessage, DispatchTypeAppNewPostText,
    DispatchTypeAppPost,
    stateType
} from "./state";
import {v1} from "uuid";


export const actionCreatorAddTextMessage = (text: string): DispatchTypeAppAddTextMessage => ({
    type: "ADD-TEXT-MESSAGE",
    text
})

export const actionCreatorAddMessages = (): DispatchTypeAppAddMessage => ({type: "ADD-MESSAGE"})

const DialogsReducer = (state: DialogPageType, action: AllActionsCreators) => {
  
    switch (action.type) {
        case 'ADD-TEXT-MESSAGE':
            state.addMessage = action.text
            return state
        case 'ADD-MESSAGE':
            state.messagesData.push({id: v1(), messages: state.addMessage},)
            state.addMessage = ''
            return state
    }
    return state
}

export default DialogsReducer