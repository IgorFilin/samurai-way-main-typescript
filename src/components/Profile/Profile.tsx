import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



type ProfileTypeProps = {
    // store: Store
}

function Profile(props: ProfileTypeProps) {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>)
}


export default Profile