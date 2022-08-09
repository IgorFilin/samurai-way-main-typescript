import React from 'react';
import {UserTypePrope} from "./UsersContainer";
import s from './Users.module.css'
import {v1} from "uuid";


export const Users = (props: UserTypePrope) => {

    props.users.length === 0 && props.setUsers([ {
        id: v1(),
        statusFollow: false,
        status:'Hello',
        avatarUser: 'https://e7.pngegg.com/pngimages/911/1005/png-clipart-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper.png',
        firstName: "Igor",
        location: {country: 'Russia', city: 'Tula'}
    },
        {
            id: v1(),
            statusFollow: true,
            status:'Samurai',
            avatarUser: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg',
            firstName: "Alisa",
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: v1(),
            statusFollow: false,
            status:'YOYOYOYO',
            avatarUser: 'https://ru-static.z-dn.net/files/d42/c5c452f9a723727abe9faaa969b16fa4.jpg',
            firstName: "Valera",
            location: {country: 'Russia', city: 'Moscow'}
        }])

    return (
        <>
            {props.users.map(us => {
                return (
                    <div className={s.Content}>
                        <div className={s.userInfo}>
                            <img className={s.Img} src={us.avatarUser}/>
                            <div>{us.statusFollow}</div>
                            <button onClick={()=>props.changeSubscriptions(us.id)}>{us.statusFollow ? 'Follow' : 'unFollow'}
                            </button>
                        </div>
                        <div className={s.blockTwo}>
                            <div className={s.nameStatus}>
                                    <div>{us.firstName}</div>
                                    <div>{us.status}</div>
                                </div>
                                <div className={s.location}>
                                    <div>{us.location.country}</div>
                                    <div>{us.location.city}</div>
                                </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

