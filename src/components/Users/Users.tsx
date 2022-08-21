import React, {Component} from 'react';
import {UserTypeProps} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhotoDefault from './../../assets/images/user.png'


class Users extends React.Component<UserTypeProps> {
    componentDidMount() {
        console.log('render Users')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${this.props.currentPage}`)
            .then(responseValue => {
                this.props.setUsers(responseValue.data.items)
                this.props.setUserCount(responseValue.data.totalCount)
            })
    }
    componentDidUpdate(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${this.props.currentPage}`)
            .then(responseValue => {
                this.props.setUsers(responseValue.data.items)
                this.props.setUserCount(responseValue.data.totalCount)
            })
    }

    onClickHandler = (page: number) => {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${page}`)
        //     .then(responseValue => {
        //         this.props.setUsers(responseValue.data.items)
        //         this.props.setUserCount(responseValue.data.totalCount)
        //     })
        this.props.setPage(page)
    }
    render() {
        let totalCountPages = Math.ceil(this.props.totalCountPages / this.props.pageSizeUsers)
        let totalCountPagesArray = []
        for (let i = 1; i <= totalCountPages; i++) {
            totalCountPagesArray.push(i)
        }
        return (
            <>
                <div className={s.pages}>
                    {totalCountPagesArray.map(page => <div className={page === this.props.currentPage ? s.activePage : s.page}
                                                           onClick={() => this.onClickHandler(page)}>{page}</div>)}
                </div>
                {this.props.users.map(us => {
                    return (
                        <div key={us.id} className={s.Content}>
                            <div className={s.userInfo}>
                                <img className={s.Img} src={!!us.photos ? userPhotoDefault : us.photos}/>
                                <div>{us.followed}</div>
                                <button
                                    onClick={() => this.props.changeSubscriptions(us.id)}>{!us.followed ? 'Follow' : 'unFollow'}
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
