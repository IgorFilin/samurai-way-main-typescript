import classes from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";


function Navbar() {
    return (<div className={classes.navbar}>
        <div className={classes.items}>
            <div className = {classes.item}><NavLink to="/profile">Profile</NavLink></div>
            <div className={classes.item}><Link to="/dialogs">Message</Link></div>
            <div className={classes.item}><Link to="/news">News</Link></div>
            <div className={classes.item}><Link to="/music">Music</Link></div>
            <div className={classes.item}><Link to="/settings">Settings</Link></div>
        </div>
    </div>)
}


export default Navbar