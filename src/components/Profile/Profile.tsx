import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, state, stateType} from "../../redux/state";

type ProfileTypeProps = {
    ProfilePage:ProfilePageType
    AddPost:()=>void
    NewPostText:(text:string)=> void
}

function Profile(props:ProfileTypeProps) {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPosts ProfilePage={props.ProfilePage} AddPost={props.AddPost} NewPostText={props.NewPostText}/>
    </div>)
}


export default Profile