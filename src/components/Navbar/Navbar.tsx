import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {stateType} from "../../redux/state";


type NavbarPropsType = {
    state:stateType
}

function Navbar(props:NavbarPropsType) {
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
        <div className={classes.friends}>
            {props.state.sidebar.friendsData.map(el=> {
                return (
                    <div key={el.id} className={classes.friend}><div><img src={"https://cs6.pikabu.ru/avatars/1121/x1121129-2144512139.png"}/></div><NavLink className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    } to={"/friend/" + el.id}>{el.name}</NavLink></div>
                )
            })}
        </div>
    </div>)
}


export default Navbar


// <div className={classes.friend}><NavLink className={({ isActive }) =>
// isActive ? classes.active : undefined
// } to={"/friend/" + }>Igor</NavLink></div>
// <div className={classes.friend}><NavLink className={({ isActive }) =>
// isActive ? classes.active : undefined
// } to="/friend/">Sveta</NavLink></div>
// <div className={classes.friend}><NavLink className={({ isActive }) =>
// isActive ? classes.active : undefined
// } to="/friend/">Sasha</NavLink></div>
// <div className={classes.friend}><NavLink className={({ isActive }) =>
// isActive ? classes.active : undefined
// } to="/friend/">Max</NavLink></div>