import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


function Profile() {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>)
}


export default Profile