import classes from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";


type DialogsUserTypeProps = {
    name: string
    id: number
}


function DialogsItems(props: DialogsUserTypeProps) {
    return <div className={classes.item}>
        <NavLink
            activeClassName={classes.active}
            to={'' + props.id}>
            {props.name}
        </NavLink>
    </div>
}

export default DialogsItems