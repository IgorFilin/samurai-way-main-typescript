import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {stateType} from "../../../redux/state";


type MyPostsTypeProps = {
    state:stateType
}

function MyPosts(props:MyPostsTypeProps) {


    const addNewPostPage = props.state.ProfilePage.postData.map(p => <Post id={p.id}  text={p.text} likeCount={p.likeCount}/> )


    return (<div className={classes.Posts}>
        <div><textarea></textarea>
            <div>
                <button>Add Post</button>
            </div>
        </div>
        {addNewPostPage}
    </div>)
}

export default MyPosts