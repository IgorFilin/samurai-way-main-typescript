import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileUserType, setProfileThunkCreator} from "../../redux/ProfileReducer";
import {StateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";


export type BookDetailProps = RouteComponentProps<WithRouteType>;
export type WithRouteType = {
    userId: string
}
export type mapStateToPropsType = {
    profile: ProfileUserType
    isLoading: boolean
}
export type mapDispatchToPropsType = {
    setProfileThunkCreator: (params: string) => void
}

export type ProfileContainerApiType = mapStateToPropsType & mapDispatchToPropsType & BookDetailProps


class ProfileContainerApi extends React.Component<ProfileContainerApiType, StateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = String(25406)
        }
        this.props.setProfileThunkCreator(userId)
    }

    render() {
        return <div>
            <Profile profile={this.props.profile} isLoading={this.props.isLoading}/>

        </div>
    }


}

const mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profileUser,
    isLoading: state.profilePage.isLoading
})

const ContainerProfileContainer = withRouter(ProfileContainerApi)

export const ProfileContainer = connect(mapStateToProps, {setProfileThunkCreator})(ContainerProfileContainer)

