import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../../Dialogs";


export type MessagePropsType = {
    message:MessageType
}

const Message = (props: MessagePropsType) => {
    return (
        <div  className={s.message}>
            <div className={s.imageAndText}>
                <img
                    src={props.message.user.avatar}
                />
                <div className={s.text}>
                    <div  className={s.name}>
                        {props.message.user.name}
                    </div>
                    <div className={s.messageText}>
                       {props.message.message.text}
                    </div>
                </div>
            </div>
            <div className={s.time}>
                <div className={s.timeContainer}>{props.message.message.time}</div>

            </div>
        </div>
    )
}

export default Message
