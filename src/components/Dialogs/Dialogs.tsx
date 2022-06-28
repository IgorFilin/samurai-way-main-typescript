import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsTypeProps ={
    messages:string
}


function Dialogs (props:DialogsTypeProps) {
    return (<div className={classes.dialogs}>
        <div className={classes.items}>
            <div className={classes.item}><NavLink activeClassName={classes.active} to={'1'}>Igor</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to={'2'}>Sveta</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to={'3'}>Ivan</NavLink></div>
            <div className={classes.item}><NavLink activeClassName={classes.active} to={'4'}>Alena</NavLink></div>
        </div>
<div className={classes.messages}>
    <div className={classes.message}>Hi</div>
    <div className={classes.message}>YOYO</div>
    <div className={classes.message}>Hello my friends :))</div>
    <div className={classes.message}>go samurai</div>
</div>
    </div>)
}

export default Dialogs