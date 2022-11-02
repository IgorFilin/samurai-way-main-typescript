import classes from "./ProfileInfo.module.css";
import {UploadOutlined} from '@ant-design/icons';
import {ProfileUserType, termModelUpdateProfile} from "../../../redux/ProfileReducer";
import avatarTemp from './../../../assets/images/user.png'
import {StatusUser} from "./StatusUser/StatusUser";
import {Button, Spin, Upload} from "antd";
import {EditableSpan} from "../../EditableSpan/EditableSpan";


export type ProfileInfoTypeProps = {
    isAuthUser: boolean
    authUserId: number | null
    profile: ProfileUserType
    isLoading: boolean
    status: string
    updateStatusThunkCreator: (status: string) => void
    userId: string
    uploadPhotoThunkCreator: (file: any) => void
    updateProfileThunkCreator: (value: termModelUpdateProfile) => void
}

function ProfileInfo(props: ProfileInfoTypeProps) {

    const nameUser = props.profile?.fullName.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')

    const changeAboutMy = (title: string) => {
        props.updateProfileThunkCreator({aboutMe: title})
    }
    const changeNameHandler = (title: string) => {
        props.updateProfileThunkCreator({fullName: title})
    }
    const ChangeLookingForAJobHandler = () => {
        props.updateProfileThunkCreator({lookingForAJob: !props.profile.lookingForAJob})
    }

    const uploadFileHandler = (file: any) => {
        props.uploadPhotoThunkCreator(file.file.originFileObj)
    }

    if (!props.profile || props.isLoading) {
        return <Spin style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}} size={"large"}/>
    }


    const lookingForAJobDescriptionChanger = (title: string) => {
        props.updateProfileThunkCreator({lookingForAJobDescription: title})
    }

    return (
        <div className={classes.profileInfo}>
            <div className={classes.mainInfoContainer}>
                <div className={classes.imgContainer}>
                    <img className={classes.img}
                         src={props.profile.photos.large ? props.profile.photos.large : avatarTemp}
                         alt={'avatar'}/>
                    <div>
                        {props.isAuthUser && props.authUserId &&
                            <Upload showUploadList={false} onChange={uploadFileHandler}>
                                <Button className={classes.buttonUploadPhoto} icon={<UploadOutlined/>}>Upload
                                    photo</Button>
                            </Upload>}
                        <StatusUser isAuthUser={props.isAuthUser}
                                    status={props.status}
                                    updateStatusThunkCreator={props.updateStatusThunkCreator} userId={props.userId}/>
                    </div>
                </div>
                <div className={classes.nameContainer}>
                    <div>
                        <h3>
                            <EditableSpan title={nameUser} disable={!props.isAuthUser} changeTitle={changeNameHandler}/>
                        </h3>
                    </div>
                    <hr/>
                    <div>
                        <h4>About me:{
                            props.profile.aboutMe ?
                                <EditableSpan
                                    title={props.profile.aboutMe!}
                                    changeTitle={changeAboutMy}
                                    disable={!props.isAuthUser}/>
                                : '---'
                        }
                        </h4>
                    </div>
                    <hr/>

                    <div
                        onClick={props.isAuthUser ? ChangeLookingForAJobHandler : () => {
                        }}>{props.profile.lookingForAJob
                        ?
                        <h4 className={props.isAuthUser ? classes.contentProfileUser : ''}>looking for a job</h4>
                        :
                        <h4 className={props.isAuthUser ? classes.contentProfileUser : ''}>not looking for a job</h4>}
                    </div>
                </div>
            </div>
            <div className={classes.contactsContainer}>
                <div>
                    <h3>looking for a job
                        description: {props.profile.lookingForAJobDescription ?
                            <EditableSpan title={props.profile.lookingForAJobDescription}
                                          changeTitle={lookingForAJobDescriptionChanger} disable={!props.isAuthUser}/> :
                            <span>---</span>}</h3>
                </div>
                <hr/>
                <h3>My contacts:</h3>
                <div>
                    <h4>website: {props.profile.contacts.website ? props.profile.contacts.website : '---'}</h4>
                    <h4>vk: {props.profile.contacts.vk ? props.profile.contacts.vk : '---'}</h4>
                    <h4>youtube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : '---'}</h4>
                    <h4>twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : '---'}</h4>
                    <h4>instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : '---'}</h4>
                    <h4>github: {props.profile.contacts.github ? props.profile.contacts.github : '---'}</h4>
                    <h4>facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : '---'}</h4>
                </div>
                <div>{Object.values(props.profile.contacts).map((c, i) => {
                    return <h5 key={i}><a target={'_blank'} href={c ? c : '#'}>{c}</a></h5>
                })}</div>
            </div>
        </div>
    )
}

export default ProfileInfo

