import React from "react";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../../redux/reduxStore";
import {actionCreatorAddPost, actionCreatorNewPostText, ProfilePageType} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

export type mapStateToPropsType = {
    profilePage:ProfilePageType
}
export type mapDispatchToProps = {
    newPostText:(text:string)=> void
    addPost:()=> void
}

const mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: DispatchType):mapDispatchToProps => {
    return {
        newPostText: (text: string) => dispatch(actionCreatorNewPostText(text)),
        addPost: () => dispatch(actionCreatorAddPost())
    }
}



export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


