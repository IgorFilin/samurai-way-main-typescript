import classes from "./ProfileInfo.module.css";
import {UploadOutlined} from '@ant-design/icons';
import {ProfileUserType, termModelUpdateProfile} from "../../../redux/ProfileReducer";
import avatarTemp from './../../../assets/images/user.png'
import {StatusUser} from "./StatusUser/StatusUser";
import {Button, Spin, Upload} from "antd";
import {ChangeEvent, useState} from "react";


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
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState<string>('')



    const nameUser = props.profile?.fullName.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')

    if (!props.profile || props.isLoading) {
        return <Spin style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}} size={"large"}/>
    }

    const uploadFileHandler = (file: any) => {
        props.uploadPhotoThunkCreator(file.file.originFileObj)
    }

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }
    const onBlurHandler = () => {
        setEditMode(false)
        props.updateProfileThunkCreator({aboutMe: value})

    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
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
                        {props.isAuthUser && props.authUserId &&

                            <Upload showUploadList={false} onChange={uploadFileHandler}>
                                <Button className={classes.buttonUploadPhoto} icon={<UploadOutlined/>}>Upload
                                    photo</Button>
                            </Upload>}
                        <StatusUser isAuthUser={props.isAuthUser} status={props.status}
                                    updateStatusThunkCreator={props.updateStatusThunkCreator} userId={props.userId}/>
                    </div>
                </div>
                <div className={classes.nameContainer}>
                    <div>
                        <h3>{nameUser}</h3>
                    </div>
                    <hr/>
                    <div onBlur={onBlurHandler} onDoubleClick={onDoubleClickHandler}><h4>About
                        me: {!editMode ? props.profile.aboutMe ? props.profile.aboutMe : <span>---</span> :
                            <input value={value} onChange={onChangeInputHandler} autoFocus type="text"/>}</h4></div>
                    <hr/>

                    <div className={classes.lookJob}>{props.profile.lookingForAJob ? <h4>looking for a job</h4> :
                        <h4>not looking for a job</h4>}</div>
                </div>
            </div>
            <div className={classes.contactsContainer}>
                <div>
                    <h3>looking for a job
                        description: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription :
                            <span>---</span>}</h3></div>
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

