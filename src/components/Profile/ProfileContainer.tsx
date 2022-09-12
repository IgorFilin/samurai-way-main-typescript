import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileUserType, setProfileThunkCreator} from "../../redux/ProfileReducer";
import {StateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


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
        if(userId === undefined){
            userId = String(25406)
        }
        this.props.setProfileThunkCreator(userId)
    }
   componentDidUpdate(prevProps: Readonly<ProfileContainerApiType>, prevState: Readonly<StateType>, snapshot?: any) {
        if(this.props.profile !== null ){
            document.title = this.props.profile.fullName
        }
   }
   componentWillUnmount() {
       document.title = 'Social network'
   }

    render() {
        return <div>
            <Profile profile={this.props.profile} isLoading={this.props.isLoading}/>
        </div>
    }


}

const mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profileUser,
    isLoading: state.profilePage.isLoading,
})

const ContainerProfileContainer = withRouter(ProfileContainerApi)
const WithAuthRedirectComponent = WithAuthRedirect(ContainerProfileContainer)
export const ProfileContainer = connect(mapStateToProps, {setProfileThunkCreator})(WithAuthRedirectComponent)

