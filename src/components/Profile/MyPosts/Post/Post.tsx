import classes from "./Post.module.css";



type PostTypeProps = {
    id: string
    text: String
    likeCount: number
}

function Post(props: PostTypeProps) {
    return (
        <div>
            <div className={classes.postItem}>
                <img src='https://i-a.d-cd.net/fcAAAgM0T-A-1920.jpg' alt='Avatar'/>
                <span className={classes.post}>{props.text}</span>
                <span className={classes.like}>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post