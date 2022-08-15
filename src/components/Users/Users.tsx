import React, {Component} from 'react';
import {UserTypePrope} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhotoDefault from './../../assets/images/user.png'



class Users extends React.Component<UserTypePrope,UserTypePrope>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responseValue => this.props.setUsers(responseValue.data.items))
    }

    render() {
        return (
            <>
                {this.props.users.map(us => {
                    debugger
                    return (
                        <div key={us.id} className={s.Content}>
                            <div className={s.userInfo}>
                                <img className={s.Img} src={!!us.photos  ?userPhotoDefault : us.photos  }/>
                                <div>{us.followed}</div>
                                <button onClick={()=>this.props.changeSubscriptions(us.id)}>{!us.followed ? 'Follow' : 'unFollow'}
                                </button>
                            </div>
                            <div className={s.blockTwo}>
                                <div className={s.nameStatus}>
                                    <div>{us.name}</div>
                                    <div>{us.status}</div>
                                </div>
                                <div className={s.location}>
                                    <div>{"us.location.country"}</div>
                                    <div>{"us.location.city"}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}



export default Users








//
// [ {
//     id: v1(),
//     statusFollow: false,
//     status:'Hello',
//     avatarUser: 'https://e7.pngegg.com/pngimages/911/1005/png-clipart-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper.png',
//     firstName: "Igor",
//     location: {country: 'Russia', city: 'Tula'}
// },
//     {
//         id: v1(),
//         statusFollow: true,
//         status:'Samurai',
//         avatarUser: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg',
//         firstName: "Alisa",
//         location: {country: 'Belarus', city: 'Minsk'}
//     },
//     {
//         id: v1(),
//         statusFollow: false,
//         status:'YOYOYOYO',
//         avatarUser: 'https://ru-static.z-dn.net/files/d42/c5c452f9a723727abe9faaa969b16fa4.jpg',
//         firstName: "Valera",
//         location: {country: 'Russia', city: 'Moscow'}
//     }]
