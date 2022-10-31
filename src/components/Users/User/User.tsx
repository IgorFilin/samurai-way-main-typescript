import s from "../Users.module.css";
import {NavLink} from "react-router-dom";
import userPhotoDefault from "../../../assets/images/user.png";
import React from "react";
import {UserType} from "../../../redux/UsersReducer";

type UserTypeProps = {
    user: UserType
    arrayUsersIdForDisabledButton: Array<string>
    unFollowThunkCreator: (userId: string) => void
    followThunkCreator: (userId: string) => void
}

export const User: React.FC<UserTypeProps> = ({
                                                  user,
                                                  arrayUsersIdForDisabledButton,
                                                  unFollowThunkCreator,
                                                  followThunkCreator
                                              }) => {
    return <div className={s.userInfo}>
        <NavLink to={'/profile/' + user.id}>
            <img className={s.Img} src={user.photos.small !== null ? user.photos.small : userPhotoDefault}
            />
        </NavLink>
        <div>{user.name}</div>
        <div className={s.status}>{user.status}</div>
        <div>{user.followed}</div>
        {user.followed ?
            <button
                className={s.buttonFollowUnfollow}
                disabled={arrayUsersIdForDisabledButton.some(el => el === user.id)}
                onClick={() => {
                    unFollowThunkCreator(user.id)
                }}>{'unFollow'}
            </button> :
            <button className={s.buttonFollowUnfollow}
                    disabled={arrayUsersIdForDisabledButton.some(id => id === user.id)}
                    onClick={() => {
                        followThunkCreator(user.id)
                    }}>{'Follow'}
            </button>}

    </div>
}