import classes from "./Post.module.css";


type PostTypeProps = {
    id: string
    text: String
    likeCount: number
    photoUser: string | undefined
}

function Post(props: PostTypeProps) {
    return (
        <div>
            <div className={classes.postItem}>
                <img src={props.photoUser ? props.photoUser : ''}/>
                <span className={classes.post}>{props.text}</span>
                <span className={classes.like}>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post