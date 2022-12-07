import React from 'react'
import Message from './Message/Message'
import MessageSender from './Message-sender/MessageSender'
import FriendMessage from './Friend-message/FriendMessage'
import avatar from '../../assets/images/avatar.png'
import s from './Dialogs.module.css'


export type MessageType = {
    id:number
    user: {
        avatar:string
        name:string
    }
    message:{
        text:string
        time:string
    }
}

const myMessagesPack = [{
    id: 0,
    user: {
        avatar: avatar,
        name: 'Me',
    },
    message: {
        text: 'Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации представляет собой интересный эксперимент проверки форм развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям',
        time: '22:00',
    },
}]
const friendsMessagesPack = [
    {
        id: 100,
        user: {
            avatar: avatar,
            name: 'Bob',
        },
        message: {
            text: 'зеркальное сообщение для тренировки css',
            time: '22:00',
        },
    }
]


export const Dialogs = () => {
    return (
        <div  className={s.mainContainer}>
            <div >
                <div>
                    <Message message={myMessagesPack} />
                    <FriendMessage message={friendsMessagesPack} />
                </div>
                <MessageSender/>
            </div>
        </div>
    )
}

export default Dialogs
