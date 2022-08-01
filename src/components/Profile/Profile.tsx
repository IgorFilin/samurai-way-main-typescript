import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    DispatchTypeAppNewPostText,
    DispatchTypeAppPost,
    ProfilePageType
} from "../../redux/store";

type ProfileTypeProps = {
    ProfilePage: ProfilePageType
    dispatch: (a: DispatchTypeAppPost | DispatchTypeAppNewPostText) => void
}

function Profile(props: ProfileTypeProps) {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPosts ProfilePage={props.ProfilePage} dispatch={props.dispatch}/>
    </div>)
}


export default Profile