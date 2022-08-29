import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authReducerStateType, setAuthUser} from "../../redux/authReducer";
import {StateType} from "../../redux/reduxStore";
import axios from "axios";
import {ProfilePageType, ProfileUserType} from "../../redux/ProfileReducer";


class HeaderContainerApi extends React.Component<HeaderContainerApiType, StateType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
            .then(response => {
                const {id,login,email} = response.data.data
                this.props.setAuthUser(id,login,email)
                debugger
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
