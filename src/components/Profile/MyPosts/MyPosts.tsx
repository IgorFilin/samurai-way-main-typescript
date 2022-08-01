import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postDataType, ProfilePageType,} from "../../../redux/store";
import React, {ChangeEvent} from "react";


type MyPostsTypeProps = {
    newPostText: (text: string) => void
    addPost: () => void
    //postData: Array<postDataType>
    profilePage: ProfilePageType
}

const MyPosts: React.FC<MyPostsTypeProps> = ({newPostText, addPost, profilePage}) => {


    const onClickHandler = () => {
        addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        newPostText(text)
    }

    const addNewPostPage = profilePage.postData.map(p =>
        <Post id={p.id} text={p.text} likeCount={p.likeCount}/>)
    return (<div className={classes.Posts}>
        <div>
            <textarea value={profilePage.addNewPostText} onChange={onChangeHandler}/>
            <div>
                <button onClick={onClickHandler}>Add Post</button>
            </div>
        </div>
        {addNewPostPage}
    </div>)
}

export default MyPosts