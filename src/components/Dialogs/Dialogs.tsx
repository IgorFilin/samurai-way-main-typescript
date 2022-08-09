import classes from './Dialogs.module.css'
import DialogsItems from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import React, {ChangeEvent} from "react";
import {dialogsDataType, messagesDataType} from "../../redux/DialogsReducer";


type DialogsPropsType = {
    AddTextMessage: (text: string) => void
    AddMessages: () => void
    messagesData:messagesDataType[]
    dialogsData:dialogsDataType[]
    addMessage:string
}

const Dialogs = (props:DialogsPropsType) => {

    const onChangeMessagesHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // AddTextMessage(e.currentTarget.value)
        let text = e.currentTarget.value
        props.AddTextMessage(text)
    }

    const onClickHandler = () => {
        // AddMessages()
        props.AddMessages()
    }


    const addMessagesPage = props.messagesData.map(m => <Message key={m.id} messages={m.messages}/>)
    const addDialogsPage = props.dialogsData.map(d => <DialogsItems key={d.id} name={d.name} id={d.id}/>)

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
                <textarea value={props.addMessage} onChange={onChangeMessagesHandler}/>
                <div>
                    <button onClick={onClickHandler}>Add Messages</button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs