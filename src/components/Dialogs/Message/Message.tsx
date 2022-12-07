import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../Dialogs";


export type MessagePropsType = {
    message:Array<MessageType>
}

const Message = (props: MessagePropsType) => {
    return (
        <div  className={s.message}>
            {props.message.map(message => {
                return (
                    <>
                        <div className={s.imageAndText}>
                            <img
                                src={message.user.avatar}
                            />
                            <div className={s.text}>
                                <div className={s.name}>
                                    {message.user.name}
                                </div>
                                <div className={s.messageText}>
                                    {message.message.text}
                                </div>
                            </div>
                        </div>
                        <div className={s.time}>
                            <div className={s.timeContainer}>{message.message.time}</div>

                        </div>
                    </>
                )
                })

            }
        </div>
    )
}

export default Message
