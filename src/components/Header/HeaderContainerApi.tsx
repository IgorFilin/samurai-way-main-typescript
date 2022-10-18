import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {loginOutUserThunkCreator} from "../../redux/authReducer";
import {StateType} from "../../redux/reduxStore";
import {ProfileUserType} from "../../redux/ProfileReducer";


class HeaderContainerApi extends React.Component<HeaderContainerApiType, StateType>{


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:StateType):mapStateToProps => {
       return {
           login:state.auth.login,
           profile:state.profilePage.profileUser,
           isAuth: state.auth.isAuth
       }
}

export type mapStateToProps = {
    isAuth:boolean
    login:string | null
    profile:ProfileUserType
}
export type mapDispatchToProps = {
    loginOutUserThunkCreator:()=>void
}

export type HeaderContainerApiType = mapStateToProps & mapDispatchToProps


export default connect (mapStateToProps,{loginOutUserThunkCreator})(HeaderContainerApi)
