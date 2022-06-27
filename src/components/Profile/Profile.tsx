import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile() {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPosts/>
    </div>)
}


export default Profile