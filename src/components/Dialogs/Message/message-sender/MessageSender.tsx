import React, {useState} from 'react'
import s from './MessageSender.module.css'
import {MessageType} from "../../Dialogs";
import Message from "../message/Message";

type MessageSenderPropsType = {
    message:MessageType
}
const MessageSender = (props: MessageSenderPropsType) => {
    const M = props.message
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }


    const addMessage = () => {
        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: props.message.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
            {messages.map((m) => (
                <Message key={'message' + m.id} message={m} />
            ))}

            <div  className={s.sendForm}>
                <textarea
                    className={s.textarea}
                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <button
                    className={s.button}
                    onClick={addMessage}
                >
                    Send
                </button>
            </div>
        </>
    )
}

export default MessageSender
