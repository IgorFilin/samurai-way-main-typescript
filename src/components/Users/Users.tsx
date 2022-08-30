import React from 'react';
import s from "./Users.module.css";
import userPhotoDefault from "../../assets/images/user.png";
import {UserType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userApi} from "../../api/api";


type UsersTypeProps = {
    totalCountPages: number
    pageSizeUsers: number
    currentPage: number
    setPage: (page: number) => void
    users: UserType[]
    follow: (id: string) => void
    unFollow: (id: string) => void

}

export const Users = (props: UsersTypeProps) => {
    let totalCountPages = Math.ceil(props.totalCountPages / props.pageSizeUsers)
    let totalCountPagesArray = []
    for (let i = 1; i <= totalCountPages; i++) {
        totalCountPagesArray.push(i)
    }
    let newTotalCountPagesArray = totalCountPagesArray.slice(0, 10)
    return (
        <>
            <div className={s.pages}>
                {newTotalCountPagesArray.map(page =>
                    <div key={page} className={page === props.currentPage ? s.activePage : s.page}
                         onClick={() => props?.setPage(page)}>{page}</div>)}
            </div>
            {props.users.map(us => {
                return (
                    <div key={us.id} className={s.Content}>
                        <div className={s.userInfo}>
                            <NavLink to={'/profile/' + us.id}><img className={s.Img}
                                                                   src={us.photos.small !== null ? us.photos.small : userPhotoDefault}/></NavLink>
                            <div>{us.followed}</div>
                            {us.followed ? <button
                                    onClick={() => {
                                       userApi.unFolow(us.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unFollow(us.id)
                                                }
                                            })

                                    }}>{'unFollow'}
                                </button> :
                                <button
                                    onClick={() => {
                                        userApi.folow(us.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(us.id)
                                                }
                                            })

                                    }}>{'Follow'}
                                </button>}

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


