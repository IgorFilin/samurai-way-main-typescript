import React from 'react';
import s from "./Users.module.css";
import userPhotoDefault from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserTypeProps} from "./UsersContainer";
import {Pagination} from 'antd';


export const Users = (props: UserTypeProps) => {

    const onChange = (page: number, pageSize: number) => {
        props.setPageThunkCreator(pageSize, page)
    }

    // const onShowSizeChangeHandler = (current: number, pageSize: number) => {
    //     debugger
    //     props.setPageThunkCreator(pageSize, current)
    // }

    // let totalCountPages = Math.ceil(props.totalCountPages / props.pageSizeUsers)
    // let totalCountPagesArray = []
    // for (let i = 1; i <= totalCountPages; i++) {
    //     totalCountPagesArray.push(i)
    // }
    // let newTotalCountPagesArray = totalCountPagesArray

    return (
        <>
            {/*<div className={s.pages}>*/}
            {/*    {newTotalCountPagesArray.map(page =>*/}
            {/*        <div key={page} className={page === props.currentPage ? s.activePage : s.page}*/}
            {/*             onClick={() => props?.setPageThunkCreator(props.pageSizeUsers,page)}>{page}</div>)}*/}
            {/*</div>*/}
            <div className={s.paginationContainer}>
                <Pagination
                    size={"small"} onShowSizeChange={onChange}
                    showLessItems
                    pageSizeOptions={['5', '10', '20']}
                    pageSize={props.pageSizeUsers}
                    current={props.currentPage}
                    total={props.totalCountPages}
                    showQuickJumper
                    onChange={onChange}/>
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
                                        onClick={() => {
                                            props.unFollowThunkCreator(us.id)
                                        }}>{'unFollow'}
                                </button> :
                                <button disabled={props.arrayUsersIdForDisabledButton.some(id => id === us.id)}
                                        onClick={() => {
                                            props.followThunkCreator(us.id)
                                        }}>{'Follow'}
                                </button>}

                        </div>
                        <div className={s.blockTwo}>
                            <div className={s.nameStatus}>
                                <div>{us.name}</div>
                                <div className={s.status}>{us.status}</div>
                            </div>
                            <div className={s.location}>
                                <div>{"country"}</div>
                                <div>{"city"}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}


