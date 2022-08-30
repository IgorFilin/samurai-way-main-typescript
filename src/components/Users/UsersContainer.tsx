import {connect} from "react-redux";
import {StateType} from "./../../redux/reduxStore";
import {follow, SetLoading, SetPage, SetUser, SetUserCount, unFollow, UserType} from "../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Loading} from "../common/Loading";
import {userApi} from "../../api/api";


type mapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    totalCountPages: number
    pageSizeUsers: number
    isLoading: boolean
}

type mapDispatchToPropsType = {
    SetUser: (users: Array<UserType>) => void
    SetPage: (pageNumber: number) => void
    SetUserCount: (userCount: number) => void
    SetLoading: (status: boolean) => void
    follow: (id: string) => void
    unFollow: (id: string) => void

}

export type UserTypeProps = mapStateToPropsType & mapDispatchToPropsType


class UsersApiComponent extends React.Component<UserTypeProps> {
    componentDidMount() {
        this.props.SetLoading(true)
        userApi.getUsers(this.props.pageSizeUsers, this.props.currentPage)
            .then(data => {
                this.props.SetLoading(false)
                this.props.SetUser(data.items)
                this.props.SetUserCount(data.totalCount)
            })
    }

    setPage(page: number){
        this.props.SetLoading(true)
        userApi.setPage(this.props.pageSizeUsers, page)
            .then(data => {
                this.props.SetLoading(false)
                this.props.SetUser(data.items)
                this.props.SetUserCount(data.totalCount)
            })
        this.props.SetPage(page)
    }

    render() {
        return <>
            {this.props.isLoading ? <Loading/> :
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       setPage={this.setPage.bind(this)}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       pageSizeUsers={this.props.pageSizeUsers}
                       totalCountPages={this.props.totalCountPages}/>}
        </>

    }

}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
        currentPage: state.userPage.currentPage,
        pageSizeUsers: state.userPage.pageSizeUsers,
        totalCountPages: state.userPage.totalUserCount,
        isLoading: state.userPage.isLoading
    }
}
// const mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => {
//     return {
//         changeSubscriptions: (idUser: string) => dispatch(ChangeSubscriptionAC(idUser)),
//         setUsers: (users: Array<UserType>) => dispatch(SetUserAC(users)),
//         setPage: (pageNumber: number) => dispatch(SetPageAC(pageNumber)),
//         setUserCount: (userCount: number) => dispatch(SetUserCountAC(userCount)),
//         setLoading:(statusLoading:boolean)=> dispatch(SetLoadingAC(statusLoading))
//     }
// }


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    SetUser,
    SetPage,
    SetUserCount,
    SetLoading
})(UsersApiComponent)

