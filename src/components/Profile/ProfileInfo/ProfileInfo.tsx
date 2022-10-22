import classes from "./ProfileInfo.module.css";
import {UploadOutlined} from '@ant-design/icons';
import {ProfileUserType} from "../../../redux/ProfileReducer";
import avatarTemp from './../../../assets/images/user.png'
import {StatusUser} from "./StatusUser/StatusUser";
import {Button, Spin, Upload} from "antd";


export type ProfileInfoTypeProps = {
    authUserId: number | null
    profile: ProfileUserType
    isLoading: boolean
    status: string
    updateStatusThunkCreator: (status: string) => void
    userId: string
    uploadPhotoThunkCreator: (file: any) => void
}

function ProfileInfo(props: ProfileInfoTypeProps) {
    let isDisplayUploadInput = true
    if (props.profile) {
        isDisplayUploadInput = props.authUserId === props.profile.userId
    }


    if (!props.profile || props.isLoading) {
        return <Spin/>
    }

    const uploadFileHandler = (file: any) => {
        props.uploadPhotoThunkCreator(file.file.originFileObj)
    }

    return (
        props.profile &&
        <div className={classes.profileInfo}>
            <div className={classes.mainInfoContainer}>
                <div className={classes.imgContainer}>
                    <img className={classes.img}
                         src={props.profile.photos.large ? props.profile.photos.large : avatarTemp}
                         alt={'avatar'}/>
                    <div>
                        {isDisplayUploadInput && props.authUserId &&
                            <Upload showUploadList={false} onChange={uploadFileHandler}>
                                <Button icon={<UploadOutlined/>}>Upload your photo</Button>
                            </Upload>}
                        <StatusUser status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}
                                    userId={props.userId}/>
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

