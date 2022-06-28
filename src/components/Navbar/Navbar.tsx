import classes from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";


function Navbar() {
    return (<div className={classes.navbar}>
        <div className={classes.items}>
            <div className = {classes.item}><NavLink activeClassName={classes.active}  to="/profile/">Profile</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to="/dialogs/">Message</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to="/news/">News</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to="/music/">Music</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to="/settings/">Settings</NavLink></div>
        </div>
    </div>)
}


export default Navbar