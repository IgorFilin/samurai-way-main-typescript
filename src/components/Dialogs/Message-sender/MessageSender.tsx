import React, {useState} from 'react'
import s from './MessageSender.module.css'
import Message from "../Message/Message";
import avatar from '../../../assets/images/avatar.png'
import {v1} from "uuid";

type MessageSenderPropsType = {

}
const MessageSender = () => {
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }


    const addMessage = () => {
        setMessages([
            ...messages,
            {
                id: v1(),
                user: {
                    avatar,
                    name:'Me'
                },
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setText('')
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
