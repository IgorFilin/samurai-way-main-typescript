import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/authReducer";
import {StateType} from "../../redux/reduxStore";
import { ProfileUserType} from "../../redux/ProfileReducer";
import {headerApi} from "../../api/api";


class HeaderContainerApi extends React.Component<HeaderContainerApiType, StateType>{
    componentDidMount() {
        headerApi.AuthUser()
            .then(data => {
                const {id,login,email} = data
                this.props.setAuthUser(id,login,email)
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:StateType) => {
       return {
           isAuth:state.auth.isAuth,
           login:state.auth.login,
           profile:state.profilePage.profileUser
       }
}

export type mapStateToProps = {
    isAuth:boolean
    login:string | null
    profile:ProfileUserType | null
}
export type mapDispatchToProps = {
    setAuthUser:(idUser:string,login:string,email:string)=>void
}

export type HeaderContainerApiType = mapStateToProps & mapDispatchToProps


export default connect (mapStateToProps,{setAuthUser})(HeaderContainerApi)
