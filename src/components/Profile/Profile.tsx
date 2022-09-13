import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType, updateStatusThunkCreator} from "../../redux/ProfileReducer";


export type profilePropsType = {
    profile:ProfileUserType
    isLoading:boolean
    status:string
    updateStatusThunkCreator:(status:string)=>void
    getStatusThunkCreator:(id:string)=>void
}

function Profile(props:profilePropsType) {
    return (<div className={classes.profile}>
        <ProfileInfo status={props.status} isLoading={props.isLoading} profile={props.profile} updateStatusThunkCreator={props.updateStatusThunkCreator} getStatusThunkCreator={props.getStatusThunkCreator}/>
        <MyPostsContainer/>
    </div>)
}


export default Profile