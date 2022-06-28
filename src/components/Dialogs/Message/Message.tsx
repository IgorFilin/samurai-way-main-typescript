import classes from "./Message.module.css";



type MessageUserTypeProps = {
    message:string
}


function Message(props: MessageUserTypeProps) {
    return(<div className={classes.message}>{props.message}</div>)

}

export default Message