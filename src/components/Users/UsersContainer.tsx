import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/redux-store";
import {ChangeSubscriptionAC, SetPageAC, SetUserAC, SetUserCountAC, UserType} from "../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


type mapStateToPropsType = {
    users : Array<UserType>
    currentPage:number
    totalCountPages:number
    pageSizeUsers:number
}

type mapDispatchToPropsType = {
    changeSubscriptions:(idUser:string)=> void
    setUsers:(users:Array<UserType>)=> void
    setPage:(pageNumber:number)=> void
    setUserCount:(userCount:number)=> void
}

export type UserTypeProps = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        users:state.userPage.users,
        currentPage:state.userPage.currentPage,
        pageSizeUsers:state.userPage.pageSizeUsers,
        totalCountPages:state.userPage.totalUserCount
    }
}
const mapDispatchToProps = (dispatch:DispatchType):mapDispatchToPropsType => {
    return {
        changeSubscriptions:(idUser:string)=> dispatch(ChangeSubscriptionAC(idUser)),
        setUsers:(users:Array<UserType>) => dispatch(SetUserAC(users)),
        setPage:(pageNumber:number) => dispatch(SetPageAC(pageNumber)),
        setUserCount:(userCount:number)=> dispatch(SetUserCountAC(userCount))
    }
}

class UsersApiConponent extends React.Component<UserTypeProps> {
    constructor(props:UserTypeProps) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${this.props.currentPage}`)
            .then(responseValue => {
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeUsers}&page=${page}`)
            .then(responseValue => {
                this.props.setUsers(responseValue.data.items)
                this.props.setUserCount(responseValue.data.totalCount)
            })
        this.props.setPage(page)
    }
    render() {
        return <Users users={this.props.users} currentPage={this.props.currentPage} setPage={this.setPage} changeSubscriptions={this.props.changeSubscriptions} pageSizeUsers={this.props.pageSizeUsers} totalCountPages={this.props.totalCountPages}/>

    }

}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersApiConponent)

