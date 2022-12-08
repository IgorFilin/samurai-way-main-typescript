import React from 'react'
import Message from './Message/Message'
import MessageSender from './Message-sender/MessageSender'
import FriendMessage from './Friend-message/FriendMessage'
import s from './Dialogs.module.css'
import {useSelector} from "react-redux";
import {StateType} from "../../redux/reduxStore";
import {dialogsDataType} from "../../redux/DialogsReducer";


export const Dialogs = () => {

    const arrayMessage = useSelector<StateType,Array<dialogsDataType>>(state=> state.dialogPage.dialogsData)

    const myMessage = arrayMessage.filter(el => el.user.name === 'My')
    const friendsMessage = arrayMessage.filter(el => el.user.name === 'Friend')


    return (
        <div  className={s.mainContainer}>
            <div >
                <div>
                    <Message message={myMessage} />
                    <FriendMessage message={friendsMessage} />
                </div>
                <MessageSender />
            </div>
        </div>
    )
}

export default Dialogs
