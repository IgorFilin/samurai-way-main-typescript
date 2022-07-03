import classes from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";



type DialogsUserTypeProps = {
    name: string
    id: number
}


function DialogsItems(props: DialogsUserTypeProps) {
    return (
        <div className={classes.item}>
         <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}>{props.name}</NavLink>
         </div>
    )

}

export default DialogsItems