import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ProfileUserType} from "../../redux/ProfileReducer";
import Logo from './../../assets/images/Logo.png'


type headerTypeProps = {
    isAuth:boolean
    login:string | null
    profile: ProfileUserType | null
    loginOutUserThunkCreator:()=>void
}

function Header(props:headerTypeProps){

    const onClickHandlerLogOut = () => {
        props.loginOutUserThunkCreator()
    }

    return(<div className={classes.header}>
        <img src={Logo} alt={'Logo'}/>
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