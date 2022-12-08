import React, {useState} from 'react'
import s from './MessageSender.module.css'
import {useDispatch} from "react-redux";
import {setMessage} from "../../../redux/DialogsReducer";


const MessageSender = () => {

    const [text, setText] = useState<any>('')

    const dispatch = useDispatch()

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }


    const addMessage = () => {
        dispatch(setMessage(text))
        setText('')
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
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
