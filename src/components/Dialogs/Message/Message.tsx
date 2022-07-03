import classes from "./Message.module.css";




export type MessageUserTypeProps = {
    messages:string

}


function Message(props: MessageUserTypeProps) {
    return(
        <div className={classes.message}>
            {props.messages}
        </div>
    )

}

export default Message