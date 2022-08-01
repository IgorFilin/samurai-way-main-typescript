import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";


type ProfileTypeProps = {
    store: Store
}

function Profile(props: ProfileTypeProps) {
    return (<div className={classes.profile}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>)
}


export default Profile