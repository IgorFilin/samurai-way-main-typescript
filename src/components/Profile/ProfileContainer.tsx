import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    ProfileUserType,
    setProfileThunkCreator,
    updateStatusThunkCreator
} from "../../redux/ProfileReducer";
import {StateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type BookDetailProps = RouteComponentProps<WithRouteType>;
export type WithRouteType = {
    userId: string
}
export type mapStateToPropsType = {
    id:string | null
    profile: ProfileUserType
    isLoading: boolean
    status:string
}
export type mapDispatchToPropsType = {
    setProfileThunkCreator: (params: string) => void
    getStatusThunkCreator: (id: string) => void
    updateStatusThunkCreator:()=>void
}

export type ProfileContainerApiType = mapStateToPropsType & mapDispatchToPropsType & BookDetailProps


class ProfileContainerApi extends React.Component<ProfileContainerApiType, StateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.id) {
            userId = this.props.id
        }
        this.props.setProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerApiType>, prevState: Readonly<StateType>, snapshot?: any) {
        if (this.props.profile !== null) {
            document.title = this.props.profile.fullName
        }
    }

    componentWillUnmount() {
        document.title = 'Social network'
    }

    render() {
        return <div>
            <Profile profile={this.props.profile} isLoading={this.props.isLoading}
                     status={this.props.status} updateStatusThunkCreator={this.props.updateStatusThunkCreator} userId={this.props.match.params.userId}/>
        </div>
    }


}

const mapStateToProps = (state: StateType):mapStateToPropsType => ({
    id:state.auth.id,
    profile: state.profilePage.profileUser,
    isLoading: state.profilePage.isLoading,
    status:state.profilePage.statusUser
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setProfileThunkCreator, getStatusThunkCreator,updateStatusThunkCreator}),
    withRouter,
    WithAuthRedirect
)(ProfileContainerApi)



