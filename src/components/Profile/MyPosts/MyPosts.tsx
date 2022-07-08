import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {stateType} from "../../../redux/state";
import React, {ChangeEvent} from "react";


type MyPostsTypeProps = {
    state: stateType
    AddPost: (text:string) => void
    newPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsTypeProps> = (props) => {


    const onClickHandler = () => {
        props.AddPost(props.state.ProfilePage.newPostText)

    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.newPostText(text)

    }

    const addNewPostPage = props.state.ProfilePage.postData.map(p => <Post id={p.id} text={p.text}
                                                                           likeCount={p.likeCount}/>)
    return (<div className={classes.Posts}>
        <div>
            <textarea value={props.state.ProfilePage.newPostText} onChange={onChangeHandler}></textarea>
            <div>
                <button onClick={onClickHandler}>Add Post</button>
            </div>
        </div>
        {addNewPostPage}
    </div>)
}

export default MyPosts