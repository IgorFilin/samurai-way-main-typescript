import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/ProfileReducer";


export type profilePropsType = {
    profile:ProfileUserType
    isLoading:boolean
    status:string
    updateStatusThunkCreator:(status:string)=>void
    userId:string
}

function Profile(props:profilePropsType) {
    return (<div className={classes.profile}>
        <ProfileInfo status={props.status} isLoading={props.isLoading} profile={props.profile} updateStatusThunkCreator={props.updateStatusThunkCreator} userId={props.userId}/>
        <MyPostsContainer />
    </div>)
}


export default Profile