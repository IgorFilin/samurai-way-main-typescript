import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../../Dialogs";



type FriendMessageType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    src={props.message.user.avatar}
                />
                <div className={s.friendText}>
                    <div
                        className={s.friendName}
                    >
                        {props.message.user.name}
                    </div>
                    <pre
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div
                className={s.friendTime}
            >
                <div className={s.timeContainer}>{props.message.message.time}</div>
            </div>
        </div>
    )
}

export default FriendMessage
