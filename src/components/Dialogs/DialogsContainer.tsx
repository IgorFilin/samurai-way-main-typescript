import React from "react";
import {actionCreatorAddMessages, actionCreatorAddTextMessage} from "../../redux/DialogsReducer";
import {Store} from "redux";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: Store
}


const DialogsContainer: React.FC<DialogsPropsType> = ({store}) => {

    const AddTextMessage = (text: string) => {
        store.dispatch(actionCreatorAddTextMessage(text))
    }

    const AddMessages = () => {
        store.dispatch(actionCreatorAddMessages())
    }

    return <Dialogs AddTextMessage={AddTextMessage} AddMessages={AddMessages} DialogPage={store.getState().DialogPage}/>
}

export default DialogsContainer