import classes from './Dialogs.module.css'
import DialogsItems from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";

type DialogsTypeProps = {
    messages: string
}


function Dialogs(props: DialogsTypeProps) {

    const dialogsData = [
        {id:1,name:'Igor'},
        {id:2,name:'Ivan'},
        {id:3,name:'Anya'},
        {id:4,name:'Valera'},
        {id:5,name:'Alisa'}
    ]
    const messagesData = [
        {id:1,messages:'Hi Samurai'},
        {id:2,messages:'YO YO'},
        {id:3,messages:'What are you doing?'},
        {id:4,messages:'Im sleep :))'},
        {id:5,messages:'Hello samurai'}
    ]
    const addMessagesPage = messagesData.map(m => <Message messages={m.messages}/>)
    const addDialogsPage = dialogsData.map(d => <DialogsItems name={d.name} id={d.id}/>)

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