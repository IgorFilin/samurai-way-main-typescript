import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile() {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPosts/>
    </div>)
}


export default Profile