import classes from './Dialogs.module.css'
import DialogsItems from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";
import React from "react";
import {dialogsDataType, messagesDataType} from "../../redux/DialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requaredField} from "../../utils/validators/validators";


type DialogsPropsType = {
    AddTextMessage: (text: string) => void
    AddMessages: (message:string) => void
    messagesData:messagesDataType[]
    dialogsData:dialogsDataType[]
    addMessage:string
    isAuth:boolean
}

type FormDataMessagesType = {
    messages:string
}


const maxLength20 = maxLengthCreator(20)


const Dialogs = (props:DialogsPropsType) => {
    const onSubmit = (formData:FormDataMessagesType) => {
        props.AddMessages(formData.messages)
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
                <TextAreaFormMessagesComponent onSubmit={onSubmit}/>
            </div>

        </div>

    )
}





const textAreaFormMessages = (props:InjectedFormProps<FormDataMessagesType>) => {

    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'messages'} component={Textarea} placeholder={'add message'} validate={[requaredField,maxLength20]}/>
        </div>
        <div>
            <button>Add Messages</button>
        </div>
    </form>)
}

const TextAreaFormMessagesComponent = reduxForm<FormDataMessagesType>({
    form:'messages'
})(textAreaFormMessages)

export default Dialogs