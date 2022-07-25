import classes from './Dialogs.module.css'
import DialogsItems from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import {
    DialogPageType, DispatchTypeAppAddMessage,
    DispatchTypeAppAddTextMessage,
} from "../../redux/state";
import React, {ChangeEvent} from "react";


type DialogsPropsType = {
    DialogPage: DialogPageType
    dispatch: (a: DispatchTypeAppAddTextMessage | DispatchTypeAppAddMessage) => void
}


const Dialogs: React.FC<DialogsPropsType> = ({DialogPage, dispatch}) => {

    const onChangeMessagesHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // AddTextMessage(e.currentTarget.value)
        let text = e.currentTarget.value
        dispatch({type: 'ADD-TEXT-MESSAGE', text})
    }

    const onClickHandler = () => {
        // AddMessages()
        dispatch({type: 'ADD-MESSAGE'})
    }


    const addMessagesPage = DialogPage.messagesData.map(m => <Message messages={m.messages}/>)
    const addDialogsPage = DialogPage.dialogsData.map(d => <DialogsItems name={d.name} id={d.id}/>)

    return (<div>
            <div className={classes.dialogs}>
                <div className={classes.items}>
                    {addDialogsPage}
                </div>
                <div className={classes.messages}>
                    {addMessagesPage}
                </div>
            </div>
            <div className={classes.textAreaMessages}>
                <textarea value={DialogPage.addMessage} onChange={onChangeMessagesHandler}/>
                <div>
                    <button onClick={onClickHandler}>Add Messages</button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs