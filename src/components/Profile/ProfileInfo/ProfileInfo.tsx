import classes from "./ProfileInfo.module.css";
import {Loading} from "../../common/Loading";
import {ProfileUserType} from "../../../redux/ProfileReducer";


export type ProfileInfoTypeProps = {
    profile:ProfileUserType
}

function ProfileInfo(props:ProfileInfoTypeProps) {



    return (
        !props.profile ? <Loading/> :
            <div className={classes.profileInfo}>
                <div className={classes.mainInfoContainer}>
                   <div className={classes.imgContainer}>
                       <img className={classes.img}
                              src={props.profile.photos.small}
                              alt={'avatar'}/>
                   </div>
                    <div className={classes.nameContainer}>
                        <div><h3>{props.profile.fullName.toLowerCase().split(' ').map(el=> el[0].toUpperCase() + el.slice(1)).join(' ')}</h3></div>
                        <hr/>
                        <div><h4>About me: {props.profile.aboutMe}</h4></div>
                        <hr/>
                        {props.profile.lookingForAJob ? <h4>looking for a job</h4> :<h4>not looking for a job</h4>}
                    </div>
                </div>
                <div className={classes.contactsContainer}>
                    <div><h3>looking for a job description: {props.profile.lookingForAJobDescription}</h3></div>
                    <hr/>
                    <h3>My contacts:</h3>
                    <div>{Object.values(props.profile.contacts).map(c => {
                        return <h5><a href={'#'}>{c}</a></h5>
                    })}</div>
                </div>

    </div>
    )
}

export default ProfileInfo