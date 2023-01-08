import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import styles from './Chat.module.css'


type arrayMessagesType = Array<{message: string,
    photo: string,
    userId: number,
    userName: string}>

export const Chat = () => {
    const [arrayMessages, setArrayMessages] = useState<arrayMessagesType>([
        {
            message: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        }, {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        }, {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        }, {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },
        {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },
        {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },
        {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },
        {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },{
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },
        {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },{
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },
        {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },{
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },
        {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },
        {
            message: "asdasd",
            photo: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
            userId: 2,
            userName: "samurai dimych"

        },



    ])
    const [message, setMessage] = useState('')

    const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const sendHandler = () => {

    }
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                {arrayMessages.map(m => {
                    return <div className={styles.message}>
                        <img src={m.photo} alt=""/>
                        <div>
                            <h4>{m.userName}</h4>
                            <h4>{m.message}</h4>
                        </div>
                    </div>
                })}
            </div>
            <textarea value={message} onChange={messageHandler} className={styles.textarea}
                      placeholder='write your message please'></textarea>
            <button onClick={sendHandler} className={styles.button}>Send</button>
        </div>
    );
};

