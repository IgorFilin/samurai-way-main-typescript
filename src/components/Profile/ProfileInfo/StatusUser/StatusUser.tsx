import classes from "../ProfileInfo.module.css";
import {ChangeEvent, Component} from "react";

type StatusUserPropsType = {
    status: string
    updateStatusThunkCreator: (status: string) => void
    getStatusThunkCreator:(id:string)=>void
}

export class StatusUser extends Component<StatusUserPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    onBlurHandler = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunkCreator(this.state.status)
    }
    onClickHandler = () => {
        this.setState({
            editMode: true
        })
    }
    onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
  componentDidUpdate(prevProps: Readonly<StatusUserPropsType>, prevState: Readonly<{}>, snapshot?: any) {
      this.props.getStatusThunkCreator('25406')
  }

    render() {
        return <div className={classes.statusUser}>
            {this.state.editMode
                ?
                <input value={this.state.status} onChange={this.onChangeHandler} autoFocus onBlur={this.onBlurHandler} type="text"/>
                :
                <span
                    onDoubleClick={this.onClickHandler}>{this.props.status === '' ? 'status not found' : this.props.status}</span>}
        </div>
    }
}

