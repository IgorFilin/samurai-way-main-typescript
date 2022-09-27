import {connect} from "react-redux";
import {StateType} from "./../../redux/reduxStore";
import {
    followThunkCreator, getUserThunkCreator, SetPage,
    setPageThunkCreator,
    unFollowThunkCreator,
    UserType
} from "../../redux/UsersReducer";
import React from "react";
import {Users} from "./Users";
import {Loading} from "../common/Loading";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";
import {
    arrayUsersIdForDisabledButton,
    currentPage,
    getUsers,
    isLoading,
    isLoadingFollowUnFollow,
    pageSizeUsers,
    totalCountPages
} from "../../redux/users-selectors";



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
                <Users {...this.props}
                />}
        </>

    }
}
const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        currentPage: currentPage(state),
        pageSizeUsers: pageSizeUsers(state),
        totalCountPages: totalCountPages(state),
        isLoading: isLoading(state),
        isLoadingFollowUnFollow:isLoadingFollowUnFollow(state),
        arrayUsersIdForDisabledButton:arrayUsersIdForDisabledButton(state)
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


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserThunkCreator,
        unFollowThunkCreator,
        followThunkCreator,
        setPageThunkCreator
    })
)(UsersApiComponent)


