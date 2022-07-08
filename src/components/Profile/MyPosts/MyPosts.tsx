import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {stateType} from "../../../redux/state";
import React from "react";


type MyPostsTypeProps = {
    state: stateType
    AddPost: (p: string) => void
}

const MyPosts: React.FC<MyPostsTypeProps> = (props) => {

    const TextAreaValue = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        if (TextAreaValue.current?.value)
            props.AddPost(TextAreaValue.current?.value)
    }


    const addNewPostPage = props.state.ProfilePage.postData.map(p => <Post  id={p.id} text={p.text}
                                                                           likeCount={p.likeCount}/>)
    return (<div className={classes.Posts}>
        <div>
            <textarea ref={TextAreaValue}></textarea>
            <div>
                <button onClick={onClickHandler}>Add Post</button>
            </div>
        </div>
        {addNewPostPage}
    </div>)
}

export default MyPosts