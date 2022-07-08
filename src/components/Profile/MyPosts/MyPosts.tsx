import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {stateType} from "../../../redux/state";
import React from "react";


type MyPostsTypeProps = {
    state: stateType
}

const MyPosts:React.FC<MyPostsTypeProps> = (props) => {

    const TextAreaValue = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        alert(TextAreaValue.current?.value)
    }


    const addNewPostPage = props.state.ProfilePage.postData.map(p => <Post key={p.id} id={p.id} text={p.text}
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