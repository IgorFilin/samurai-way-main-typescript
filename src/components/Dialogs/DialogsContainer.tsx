import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {DispatchType, StateType} from "../../redux/reduxStore";
import {
    actionCreatorAddMessages,
    actionCreatorAddTextMessage, dialogsDataType,
    messagesDataType
} from "../../redux/DialogsReducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";


export type mapStateToPropsType = {
    messagesData: messagesDataType[]
    dialogsData: dialogsDataType[]
    addMessage: string
}

export type mapDispatchToPropsType = {
    AddTextMessage: (text: string) => void
    AddMessages: () => void
}


const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        messagesData: state.dialogPage.messagesData,
        dialogsData: state.dialogPage.dialogsData,
        addMessage: state.dialogPage.addMessage
    }
}
const mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => {
    return {
        AddTextMessage: (text: string) => dispatch(actionCreatorAddTextMessage(text)),
        AddMessages: () => dispatch(actionCreatorAddMessages())
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)



