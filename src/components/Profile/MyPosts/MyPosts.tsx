import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType, stateType} from "../../../redux/state";
import React, {ChangeEvent} from "react";


type MyPostsTypeProps = {
    ProfilePage: ProfilePageType
    AddPost: () => void
    NewPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsTypeProps> = ({ProfilePage, AddPost, NewPostText}) => {


    const onClickHandler = () => {
        AddPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        NewPostText(text)
    }

    const addNewPostPage = ProfilePage.postData.map(p =>
        <Post id={p.id} text={p.text} likeCount={p.likeCount}/>)
    return (<div className={classes.Posts}>
        <div>
            <textarea value={ProfilePage.addNewPostText} onChange={onChangeHandler}/>
            <div>
                <button onClick={onClickHandler}>Add Post</button>
            </div>
        </div>
        {addNewPostPage}
    </div>)
}

export default MyPosts