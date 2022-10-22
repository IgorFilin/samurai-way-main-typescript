import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/ProfileReducer";


export type profilePropsType = {
    authUserId:number | null
    profile:ProfileUserType
    isLoading:boolean
    status:string
    updateStatusThunkCreator:(status:string)=>void
    userId:string
    uploadPhotoThunkCreator:(file:any)=>void
}

function Profile(props:profilePropsType) {
    return (<div className={classes.profile}>
        <ProfileInfo authUserId={props.authUserId} uploadPhotoThunkCreator={props.uploadPhotoThunkCreator} status={props.status} isLoading={props.isLoading} profile={props.profile} updateStatusThunkCreator={props.updateStatusThunkCreator} userId={props.userId}/>
        <MyPostsContainer />
    </div>)
}


export default Profile