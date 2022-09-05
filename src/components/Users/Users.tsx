import React from 'react';
import s from "./Users.module.css";
import userPhotoDefault from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserTypeProps} from "./UsersContainer";




export const Users = (props: UserTypeProps) => {
    let totalCountPages = Math.ceil(props.totalCountPages / props.pageSizeUsers)
    let totalCountPagesArray = []
    for (let i = 1; i <= totalCountPages; i++) {
        totalCountPagesArray.push(i)
    }
    let newTotalCountPagesArray = totalCountPagesArray.slice(0, 15)
    return (
        <>
            <div className={s.pages}>
                {newTotalCountPagesArray.map(page =>
                    <div key={page} className={page === props.currentPage ? s.activePage : s.page}
                         onClick={() => props?.setPageThunkCreator(props.pageSizeUsers,page)}>{page}</div>)}
            </div>
            {props.users.map(us => {
                return (
                    <div key={us.id} className={s.Content}>
                        <div className={s.userInfo}>
                            <NavLink to={'/profile/' + us.id}>
                                <img className={s.Img}
                                     src={us.photos.small !== null ? us.photos.small : userPhotoDefault}/>
                            </NavLink>
                            <div>{us.followed}</div>
                            {us.followed ?
                                <button disabled={props.arrayUsersIdForDisabledButton.some(id => id === us.id)}
                                        onClick={()=> {
                                            props.unFollowThunkCreator(us.id)
                                        }}>{'unFollow'}
                                </button> :
                                <button disabled={props.arrayUsersIdForDisabledButton.some(id => id === us.id)}
                                        onClick={() => {
                                            props.followThunkCreator(us.id)}}>{'Follow'}
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


