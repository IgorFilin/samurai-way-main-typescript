import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setProfileUser} from "../../redux/ProfileReducer";
import {StateType} from "../../redux/reduxStore";



export type mapStateToPropsType = {
    profile:ProfileUserType
}
export type mapDispatchToPropsType = {
    setProfileUser:(profileUser:object)=>void
}

export type ProfileContainerApiType = mapStateToPropsType & mapDispatchToPropsType



class ProfileContainerApi extends React.Component<ProfileContainerApiType,StateType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(resolve => {
                console.log(resolve.data)
                this.props.setProfileUser(resolve.data)
            })
            .catch((err)=> console.log(err))
    }

    render(){

            return <div>
                <Profile profile={this.props.profile} />
            </div>
        }


}





const mapStateToProps = (state:StateType) => ({
     profile:state.ProfilePage.profileUser
})


export const ProfileContainer = connect(mapStateToProps,{setProfileUser})(ProfileContainerApi)

