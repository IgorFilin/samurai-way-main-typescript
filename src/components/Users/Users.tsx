import React from 'react';
import s from "./Users.module.css";
import {UserTypeProps} from "./UsersContainer";
import {Pagination} from 'antd';
import {User} from "./User/User";


export const Users = (props: UserTypeProps) => {

    const onChange = (page: number, pageSize: number) => {
        props.setPageThunkCreator(pageSize, page)
    }

    return (
        <>

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
            <div className={s.Content}>
                {props.users.map(us => <User
                    user={us}
                    arrayUsersIdForDisabledButton={props.arrayUsersIdForDisabledButton}
                    followThunkCreator={props.followThunkCreator}
                    unFollowThunkCreator={props.unFollowThunkCreator}
                    key={us.id}/>)}
            </div>
        </>
    );
}


{/*<div className={s.pages}>*/
}
{/*    {newTotalCountPagesArray.map(page =>*/
}
{/*        <div key={page} className={page === props.currentPage ? s.activePage : s.page}*/
}
{/*             onClick={() => props?.setPageThunkCreator(props.pageSizeUsers,page)}>{page}</div>)}*/
}
{/*</div>*/
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
