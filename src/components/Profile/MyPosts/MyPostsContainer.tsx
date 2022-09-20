import React from "react";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../../redux/reduxStore";
import {actionCreatorAddPost, ProfilePageType} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";


export type mapStateToPropsType = {
    profilePage:ProfilePageType
}
export type mapDispatchToProps = {
    addPost:(post:string)=> void
}

const mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: DispatchType):mapDispatchToProps => {
    return {
        addPost: (post:string) => dispatch(actionCreatorAddPost(post))
    }
}



export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


