import {connect} from "react-redux";
import {StateType} from "./../../redux/reduxStore";
import {
    follow, followThunkCreator, getUserThunkCreator,
    SetLoading,
    SetLoadingFollowUnFollow,
    SetPage, setPageThunkCreator,
    SetUser,
    SetUserCount,
    unFollow, unFollowThunkCreator,
    UserType
} from "../../redux/UsersReducer";
import React from "react";
import {Users} from "./Users";
import {Loading} from "../common/Loading";
import {userApi} from "../../api/api";


type mapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    totalCountPages: number
    pageSizeUsers: number
    isLoading: boolean
    isLoadingFollowUnFollow:boolean
    arrayUsersIdForDisabledButton:Array<string>
}

type mapDispatchToPropsType = {
    setPageThunkCreator:(pageSizeUsers:number,page:number)=>void
    getUserThunkCreator:(pageSizeUsers:number,currentPage:number)=> void
    unFollowThunkCreator:(userId:string) => void
    followThunkCreator:(userId:string) => void

}

export type UserTypeProps = mapStateToPropsType & mapDispatchToPropsType


class UsersApiComponent extends React.Component<UserTypeProps> {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.pageSizeUsers,this.props.currentPage)
    }

    setPage(page: number){
      this.props.setPageThunkCreator(this.props.pageSizeUsers,page)
    }

    render() {
        return <>
            {this.props.isLoading ? <Loading/> :
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       setPage={this.setPage.bind(this)}
                       pageSizeUsers={this.props.pageSizeUsers}
                       totalCountPages={this.props.totalCountPages}
                       isLoadingFollowUnFollow={this.props.isLoadingFollowUnFollow}
                       arrayUsersIdForDisabledButton={this.props.arrayUsersIdForDisabledButton}
                       followThunkCreator={this.props.followThunkCreator}
                       unFollowThunkCreator={this.props.unFollowThunkCreator}
                />}
        </>

    }

}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
        currentPage: state.userPage.currentPage,
        pageSizeUsers: state.userPage.pageSizeUsers,
        totalCountPages: state.userPage.totalUserCount,
        isLoading: state.userPage.isLoading,
        isLoadingFollowUnFollow:state.userPage.isLoadingFollowUnFollow,
        arrayUsersIdForDisabledButton:state.userPage.arrayUsersIdForDisabledButton
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
    getUserThunkCreator,
    unFollowThunkCreator,
    followThunkCreator,
    setPageThunkCreator
})(UsersApiComponent)

