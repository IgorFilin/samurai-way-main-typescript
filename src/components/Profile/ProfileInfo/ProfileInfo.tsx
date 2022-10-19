import classes from "./ProfileInfo.module.css";
import {Loading} from "../../common/Loading";
import {ProfileUserType} from "../../../redux/ProfileReducer";
import avatarTemp from './../../../assets/images/user.png'
import {StatusUser} from "./StatusUser/StatusUser";
import {Spin} from "antd";


export type ProfileInfoTypeProps = {
    profile: ProfileUserType
    isLoading: boolean
    status:string
    updateStatusThunkCreator:(status:string)=>void
    userId:string
}

function ProfileInfo(props: ProfileInfoTypeProps) {

    if (!props.profile || props.isLoading) {
        return <Spin />
    }


    return (
        props.profile &&
        <div className={classes.profileInfo}>
            <div className={classes.mainInfoContainer}>
                <div className={classes.imgContainer}>
                    <img className={classes.img}
                         src={props.profile.photos.small ? props.profile.photos.small : avatarTemp}
                         alt={'avatar'}/>
                    <div>
                        <StatusUser status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator} userId={props.userId}/>
                    </div>
                </div>
                <div className={classes.nameContainer}>
                    <div>
                        <h3>{props.profile.fullName.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')}</h3>
                    </div>
                    <hr/>
                    <div><h4>About me: {props.profile.aboutMe}</h4></div>
                    <hr/>
                    {props.profile.lookingForAJob ? <h4>looking for a job</h4> : <h4>not looking for a job</h4>}
                </div>
            </div>
            <div className={classes.contactsContainer}>
                <div>
                    <h3>looking for a job description: {props.profile.lookingForAJobDescription}</h3></div>
                <hr/>
                <h3>My contacts:</h3>
                <div>{Object.values(props.profile.contacts).map((c, i) => {
                    return <h5 key={i}><a target={'_blank'} href={c ? c : '#'}>{c}</a></h5>
                })}</div>
            </div>

        </div>
    )
}

export default ProfileInfo

