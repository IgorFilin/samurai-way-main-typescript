import {connect} from "react-redux";
import {Users} from "./Users";
import {DispatchType, StateType} from "../../redux/redux-store";
import {ChangeSubscriptionAC, SetUserAC, UserType} from "../../redux/UsersReducer";


type mapStateToPropsType = {
    users : Array<UserType>
}

type mapDispatchToPropsType = {
    changeSubscriptions:(idUser:string)=> void
    setUsers:(users:Array<UserType>)=> void
}

export type UserTypePrope = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        users:state.userPage.users
    }
}
const mapDispatchToProps = (dispatch:DispatchType):mapDispatchToPropsType => {
    return {
        changeSubscriptions:(idUser:string)=> dispatch(ChangeSubscriptionAC(idUser)),
        setUsers:(users:Array<UserType>) => dispatch(SetUserAC(users))
    }
}



export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

