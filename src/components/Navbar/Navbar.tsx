import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";


function Navbar() {
    return (<div className={classes.navbar}>
        <div className={classes.items}>
            <div className = {classes.item}><NavLink className={({ isActive }) =>
                isActive ? classes.active : undefined
            }  to="/profile/">Profile</NavLink></div>
            <div className={classes.item}><NavLink className={({ isActive }) =>
                isActive ? classes.active : undefined
            } to="/dialogs/">Message</NavLink></div>
            <div className={classes.item}><NavLink className={({ isActive }) =>
                isActive ? classes.active : undefined
            } to="/news/">News</NavLink></div>
            <div className={classes.item}><NavLink className={({ isActive }) =>
                isActive ? classes.active : undefined
            } to="/music/">Music</NavLink></div>
            <div className={classes.item}><NavLink className={({ isActive }) =>
                isActive ? classes.active : undefined
            } to="/settings/">Settings</NavLink></div>
        </div>
    </div>)
}


export default Navbar