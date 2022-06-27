import classes from "./MyPosts.module.css";
import Post from "./Post/Post";



function MyPosts() {
    return (<div className={classes.Posts}>
        <div><textarea></textarea>
            <div>
                <button>Add Post</button>
            </div>
        </div>
        <Post text={'Hello,Its my first post'} likeCount={10}/>
        <Post text={'yoyoyo'} likeCount={5}/>
        <Post text={'Welcome samurai'} likeCount={11}/>
    </div>)
}

export default MyPosts