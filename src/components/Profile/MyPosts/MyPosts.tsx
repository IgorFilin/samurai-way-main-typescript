import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    DispatchTypeAppNewPostText,
    DispatchTypeAppPost,
    ProfilePageType,

} from "../../../redux/store";
import React, {ChangeEvent} from "react";
import {actionCreatorAddPost, actionCreatorNewPostText} from "../../../redux/ProfileReducer";


type MyPostsTypeProps = {
    ProfilePage: ProfilePageType
    dispatch: (a: DispatchTypeAppPost | DispatchTypeAppNewPostText) => void
}

const MyPosts: React.FC<MyPostsTypeProps> = ({ProfilePage, dispatch}) => {


    const onClickHandler = () => {
        // AddPost()

        dispatch(actionCreatorAddPost())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
        // NewPostText(text)
        dispatch(actionCreatorNewPostText(text))
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