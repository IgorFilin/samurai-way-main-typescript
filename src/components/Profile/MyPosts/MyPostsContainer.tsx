import classes from "./MyPosts.module.css";
import {StoreType} from "../../../redux/store";
import React from "react";
import {actionCreatorAddPost, actionCreatorNewPostText} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";


type MyPostsContainerTypeProps = {
    store: Store
}

const MyPostsContainer: React.FC<MyPostsContainerTypeProps> = ({store}) => {
    const addPost = () => {
        // AddPost()
        store.dispatch(actionCreatorAddPost())
    }
    const newPostText = (text: string) => {
        // NewPostText(text)
        store.dispatch(actionCreatorNewPostText(text))
    }

    return (<div className={classes.Posts}>
        <MyPosts addPost={addPost} newPostText={newPostText}
                 profilePage={store.getState().ProfilePage}

        />
    </div>)
}

export default MyPostsContainer