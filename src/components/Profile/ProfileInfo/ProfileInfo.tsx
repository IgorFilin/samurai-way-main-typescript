import classes from "./ProfileInfo.module.css";

function ProfileInfo(){
    return (
        <div className={classes.profileInfo}><img className={classes.img}
                  src={'https://avatars.yandex.net/get-music-user-playlist/59900/522453638.1003.652/m1000x1000?1513785396380&webp=false'} alt={'avatar'}/>
            <div><h1>Hello,Im Igor, and im frontend delevoper</h1></div></div>
    )
}

export default ProfileInfo