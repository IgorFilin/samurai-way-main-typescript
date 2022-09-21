import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import { ProfileUserType} from "../../redux/ProfileReducer";
import {loginOutUserThunkCreator} from "../../redux/authReducer";


type headerTypeProps = {
    isAuth:boolean
    login:string | null
    profile: ProfileUserType | null
}

function Header(props:headerTypeProps){
    const onClickHandlerLogOut = () => {
        // @ts-ignore
        props.loginOutUserThunkCreator()
    }

    return(<div className={classes.header}>
        <img src={'./../Logo.png'} alt={'Logo'}/>
        {props.isAuth ?
            <div className={classes.profileAuthData}>
            <img src={props.profile?.photos.small} alt="Photo" />
            <div className={classes.loginText}>{props.login}</div>
                <div><button onClick={onClickHandlerLogOut}>Log out</button></div>
            </div>
            :
            <NavLink className={classes.loginText} to={'/login'}>Login</NavLink>}
    </div>)

}


export default Header