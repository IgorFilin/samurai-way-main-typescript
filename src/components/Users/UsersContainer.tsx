import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/redux-store";
import {
    ChangeSubscriptionAC,
    SetLoadingAC,
    SetPageAC,
    SetUserAC,
    SetUserCountAC,
    UserType
} from "../../redux/UsersReducer";
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
    changeSubscriptions: (idUser: string) => void
    setUsers: (users: Array<UserType>) => void
    setPage: (pageNumber: number) => void
    setUserCount: (userCount: number) => void
    setLoading:(status:boolean)=> void
}

export type UserTypeProps = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
        currentPage: state.userPage.currentPage,
        pageSizeUsers: state.userPage.pageSizeUsers,
        totalCountPages: state.userPage.totalUserCount,
        isLoading:state.userPage.isLoading
    }
}
const mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => {
    return {
        changeSubscriptions: (idUser: string) => dispatch(ChangeSubscriptionAC(idUser)),
        setUsers: (users: Array<UserType>) => dispatch(SetUserAC(users)),
        setPage: (pageNumber: number) => dispatch(SetPageAC(pageNumber)),
        setUserCount: (userCount: number) => dispatch(SetUserCountAC(userCount)),
        setLoading:(statusLoading:boolean)=> dispatch(SetLoadingAC(statusLoading))
    }
}

class UsersApiConponent extends React.Component<UserTypeProps> {
    componentDidMount() {
        this.props.setLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${this.props.currentPage}`)
            .then(responseValue => {
                this.props.setLoading(false)
                this.props.setUsers(responseValue.data.items)
                this.props.setUserCount(responseValue.data.totalCount)
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
        this.props.setLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${page}`)
            .then(responseValue => {
                this.props.setLoading(false)
                this.props.setUsers(responseValue.data.items)
                this.props.setUserCount(responseValue.data.totalCount)
            })
        this.props.setPage(page)
    }

    render() {
        return <>
            {this.props.isLoading ? <Loading/>:
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   setPage={this.setPage}
                   changeSubscriptions={this.props.changeSubscriptions}
                   pageSizeUsers={this.props.pageSizeUsers}
                   totalCountPages={this.props.totalCountPages}/>}
        </>

    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiConponent)

