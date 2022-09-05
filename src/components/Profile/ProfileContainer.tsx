import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileUserType, setProfileThunkCreator} from "../../redux/ProfileReducer";
import {StateType} from "../../redux/reduxStore";
import {profileApi} from "../../api/api";




export type mapStateToPropsType = {
    profile:ProfileUserType
    isLoading:boolean
    params:string
}
export type mapDispatchToPropsType = {
    setProfileThunkCreator:(params:string)=>void
}

export type ProfileContainerApiType = mapStateToPropsType & mapDispatchToPropsType



class ProfileContainerApi extends React.Component<ProfileContainerApiType,StateType>{
    componentDidMount() {
    this.props.setProfileThunkCreator(this.props.params)
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



export const ProfileContainer = connect(mapStateToProps,{setProfileThunkCreator})(ProfileContainerApi)

