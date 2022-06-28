import classes from './Dialogs.module.css'
import DialogsItems from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";

type DialogsTypeProps = {
    messages: string
}


function Dialogs(props: DialogsTypeProps) {
    return (<div className={classes.dialogs}>
        <div className={classes.items}>
            <DialogsItems name={'Igor'} id={1}/>
            <DialogsItems name={'Ivan'} id={2}/>
            <DialogsItems name={'Anya'} id={3}/>
            <DialogsItems name={'Valera'} id={4}/>
            <DialogsItems name={'Alisa'} id={5}/>
        </div>
        <div className={classes.messages}>
            <Message message={'Hi Samurai'}/>
            <Message message={'YO YO'}/>
            <Message message={'What are you doing?'}/>
            <Message message={'Im sleep :))'}/>
        </div>
    </div>)
}

export default Dialogs