import classes from './Dialogs.module.css'
import DialogsItems from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import {stateType} from "../../redux/state";



type DialogsPropsType = {
    state:stateType
}


function Dialogs(props:DialogsPropsType) {



    const addMessagesPage = props.state.DialogPage.messagesData.map(m => <Message messages={m.messages}/>)
    const addDialogsPage = props.state.DialogPage.dialogsData.map(d => <DialogsItems name={d.name} id={d.id}/>)

    return (<div className={classes.dialogs}>
        <div className={classes.items}>
            {addDialogsPage}
         </div>
        <div className={classes.messages}>
            {addMessagesPage}
         </div>
    </div>)
}

export default Dialogs