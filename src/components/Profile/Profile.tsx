import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {state, stateType} from "../../redux/state";

type ProfileTypeProps = {
    state:stateType
    AddPost:(text:string)=>void
    newPostText:(text:string)=> void
}

function Profile(props:ProfileTypeProps) {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPosts state={props.state} AddPost={props.AddPost} newPostText={props.newPostText}/>
    </div>)
}


export default Profile