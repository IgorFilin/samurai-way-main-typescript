import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {state, stateType} from "../../redux/state";

type ProfileTypeProps = {
    state:stateType
}

function Profile(props:ProfileTypeProps) {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPosts state={props.state}/>
    </div>)
}


export default Profile