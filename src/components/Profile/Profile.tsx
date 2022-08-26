import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/ProfileReducer";


export type profilePropsType = {
    profile:ProfileUserType
    isLoading:boolean
}

function Profile(props:profilePropsType) {
    return (<div className={classes.profile}>
        <ProfileInfo isLoading={props.isLoading} profile={props.profile}/>
        <MyPostsContainer/>
    </div>)
}


export default Profile