import classes from './Dialogs.module.css'

type DialogsTypeProps ={
    messages:string
}


function Dialogs (props:DialogsTypeProps) {
    return (<div>{props.messages}</div>)
}

export default Dialogs