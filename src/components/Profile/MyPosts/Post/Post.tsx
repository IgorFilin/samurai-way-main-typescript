import classes from "./Post.module.css";

type PostTypeProps = {
    text:String
    likeCount: number
}

function Post(props:PostTypeProps) {
    return (<div className={classes.post}>
        <div><img className={classes.img} src={'https://i-a.d-cd.net/fcAAAgM0T-A-1920.jpg'} alt={'avatar'}/></div>
        <div className={classes.postItem}>{props.text}
            <div className={classes.like}>{props.likeCount}</div>
        </div>

    </div>)
}

export default Post