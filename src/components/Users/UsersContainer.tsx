import {connect} from "react-redux";
import {StateType} from "./../../redux/reduxStore";
import {ChangeSubscription, SetLoading, SetPage, SetUser, SetUserCount, UserType} from "../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Loading} from "../common/Loading";


type mapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    totalCountPages: number
    pageSizeUsers: number
    isLoading:boolean
}

type mapDispatchToPropsType = {
    ChangeSubscription: (idUser: string) => void
    SetUser: (users: Array<UserType>) => void
    SetPage: (pageNumber: number) => void
    SetUserCount: (userCount: number) => void
    SetLoading:(status:boolean)=> void
}

export type UserTypeProps = mapStateToPropsType & mapDispatchToPropsType


class UsersApiComponent extends React.Component<UserTypeProps> {
    componentDidMount() {
        this.props.SetLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${this.props.currentPage}`)
            .then(responseValue => {
                this.props.SetLoading(false)
                this.props.SetUser(responseValue.data.items)
                this.props.SetUserCount(responseValue.data.totalCount)
            })
    }

    // componentDidUpdate(){
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${this.props.currentPage}`)
    //         .then(responseValue => {
    //             this.props.setUsers(responseValue.data.items)
    //             this.props.setUserCount(responseValue.data.totalCount)
    //         })
    // }
    setPage = (page: number) => {
        this.props.SetLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${page}`)
            .then(responseValue => {
                this.props.SetLoading(false)
                this.props.SetUser(responseValue.data.items)
                this.props.SetUserCount(responseValue.data.totalCount)
            })
        this.props.SetPage(page)
    }

    render() {
        return <>
            {this.props.isLoading ? <Loading/>:
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   setPage={this.setPage}
                   changeSubscriptions={this.props.ChangeSubscription}
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
        isLoading:state.userPage.isLoading
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


export const UsersContainer = connect(mapStateToProps, {ChangeSubscription, SetUser, SetPage, SetUserCount, SetLoading})(UsersApiComponent)

