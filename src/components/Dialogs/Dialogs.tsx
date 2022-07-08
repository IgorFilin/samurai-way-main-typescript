import classes from './Dialogs.module.css'
import DialogsItems from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import {stateType} from "../../redux/state";
import React from "react";


type DialogsPropsType = {
    state: stateType
}


function Dialogs(props: DialogsPropsType) {

    const valueMessageRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        alert(valueMessageRef.current?.value)
    }


    const addMessagesPage = props.state.DialogPage.messagesData.map(m => <Message messages={m.messages}/>)
    const addDialogsPage = props.state.DialogPage.dialogsData.map(d => <DialogsItems name={d.name} id={d.id}/>)

    return (<div>
            <div className={classes.dialogs}>
                <div className={classes.items}>
                    {addDialogsPage}
                </div>
                <div className={classes.messages}>
                    {addMessagesPage}
                </div>
            </div>
            <div className={classes.textAreaMessages}><textarea ref={valueMessageRef}></textarea><div>
                <button onClick={onClickHandler}>Add Messages</button></div></div>

        </div>

    )
}

export default Dialogs