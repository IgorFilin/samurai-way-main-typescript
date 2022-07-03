import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {
    const postData = [
        {id: 1, text: 'Hello,Its my first post', likeCount: 10},
        {id: 2, text: 'yoyoyo', likeCount: 12},
        {id: 3, text: 'Welcome samurai', likeCount: 77},
    ]

    const addNewPostPage = postData.map(p => <Post id={p.id}  text={p.text} likeCount={p.likeCount}/> )


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