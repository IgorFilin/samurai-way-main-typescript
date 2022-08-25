import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ProfilePropsType = {

}

function Profile() {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>)
}


export default Profile