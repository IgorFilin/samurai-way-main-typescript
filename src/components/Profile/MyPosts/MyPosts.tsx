import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, {ChangeEvent} from "react";
import {ProfilePageType} from "../../../redux/ProfileReducer";


type MyPostsTypeProps = {
    newPostText: (text: string) => void
    addPost: () => void
    profilePage: ProfilePageType
}

const MyPosts = (props:MyPostsTypeProps) => {


    const onClickHandler = () => {
        props.addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
        props.newPostText(text)
    }

    const addNewPostPage = props.profilePage.postData.map(p =>
        <Post id={p.id} text={p.text} likeCount={p.likeCount}/>)
    return (<div className={classes.Posts}>
        <div>
            <textarea value={props.profilePage.addNewPostText} onChange={onChangeHandler}/>
            <div>
                <button onClick={onClickHandler}>Add Post</button>
            </div>
        </div>
        {addNewPostPage}
    </div>)
}

export default MyPosts