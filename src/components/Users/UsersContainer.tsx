import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/redux-store";
import {ChangeSubscriptionAC, SetPageAC, SetUserAC, SetUserCountAC, UserType} from "../../redux/UsersReducer";
import Users from "./Users";


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



export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

