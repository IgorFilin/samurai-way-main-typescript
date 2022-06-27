import classes from './Navbar.module.css'


function Navbar() {
    return (<div className={classes.navbar}>
        <div className={classes.items}>
            <div className={classes.item}><a href='/profile'>Profile</a></div>
            <div className={classes.item}><a href='/dialogs'>Message</a></div>
            <div className={classes.item}><a href='#'>News</a></div>
            <div className={classes.item}><a href='#'>Music</a></div>
            <div className={classes.item}><a href='#'>Settings</a></div>
        </div>

    </div>)
}


export default Navbar