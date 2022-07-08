import classes from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";



type DialogsUserTypeProps = {
    name: string
    id: string
}


function DialogsItems(props: DialogsUserTypeProps) {
    return (
        <div className={classes.item}>
         <NavLink to={'/dialogs/' + props.id} className={({ isActive }) =>
             isActive ? classes.active : undefined
         }>{props.name}</NavLink>
         </div>
    )

}

export default DialogsItems