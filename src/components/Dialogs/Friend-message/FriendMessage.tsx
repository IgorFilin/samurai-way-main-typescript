import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../Dialogs";



type FriendMessageType = {
    message: Array<MessageType>
}

const FriendMessage = (props: FriendMessageType) => {
    return (
        <div className={s.friendMessage}>
            {props.message.map(message => {
            return (
                <>
                <div className={s.friendImageAndText}>
                    <img
                        src={message.user.avatar}
                    />
                    <div className={s.friendText}>
                        <div
                            className={s.friendName}
                        >
                            {message.user.name}
                        </div>
                        <pre
                            className={s.friendMessageText}
                        >
                        {message.message.text}
                    </pre>
                    </div>
                </div>
            <div
                className={s.friendTime}
            >
                <div className={s.timeContainer}>{message.message.time}</div>
            </div>
                </>
            )
        })

        }
        </div>
    )
}

export default FriendMessage
