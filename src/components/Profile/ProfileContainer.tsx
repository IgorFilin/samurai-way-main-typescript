import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, SetIsLoading, setProfileUser} from "../../redux/ProfileReducer";
import {StateType} from "../../redux/reduxStore";
import {profileApi} from "../../api/api";




export type mapStateToPropsType = {
    profile:ProfileUserType
    isLoading:boolean
    params:string
}
export type mapDispatchToPropsType = {
    setProfileUser:(profileUser:ProfileUserType)=>void
    SetIsLoading:(status:boolean)=> void
}

export type ProfileContainerApiType = mapStateToPropsType & mapDispatchToPropsType



class ProfileContainerApi extends React.Component<ProfileContainerApiType,StateType>{
    componentDidMount() {
        this.props.SetIsLoading(true)
       profileApi.setProfileUser(this.props.params)
            .then(data => {
                this.props.SetIsLoading(false)
                this.props.setProfileUser(data)
            })

    }

    render(){
            return <div>
                <Profile profile={this.props.profile} isLoading={this.props.isLoading} />
            </div>
        }


}

const mapStateToProps = (state:StateType) => ({
     profile:state.profilePage.profileUser,
    isLoading:state.profilePage.isLoading
})



export const ProfileContainer = connect(mapStateToProps,{setProfileUser,SetIsLoading})(ProfileContainerApi)

