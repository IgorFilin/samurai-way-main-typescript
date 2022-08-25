import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setProfileUser} from "../../redux/ProfileReducer";
import {StateType} from "../../redux/reduxStore";


export type mapStateToPropsType = {
    profile:{}
}
export type mapDispatchToPropsType = {
    setProfileUser:(profileUser:object)=>void
}

export  type ProfileContainerApiType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainerApi extends React.Component<ProfileContainerApiType,StateType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/').then(resole => {
            this.props.setProfileUser(resole.data)
        })
    }

    render(){
        debugger
            return <div>
                <Profile  />
            </div>
        }


}





const mapStateToProps = (state:ProfilePageType) => ({
     profile:state.profileUser
})


export const ProfileContainer = connect(mapStateToProps,{setProfileUser})(ProfileContainerApi)

