import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {postDataType, ProfilePageType} from "../../../redux/ProfileReducer";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLengthCreator, requaredField} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20)

type MyPostsTypeProps = {
    addPost: (post:string) => void
    posts:Array<postDataType>
    photoUser:string | undefined
}
type FormDataTypePost = {
    post:string
}
export const MyPosts = (props: MyPostsTypeProps) => {
    const addNewPostPage = props.posts.map(p =>
        <Post photoUser={props.photoUser} id={p.id} key={p.id} text={p.text} likeCount={p.likeCount}/>)

    const onSubmit = (formData:FormDataTypePost) => {
        props.addPost(formData.post)
    }
    return (<div className={classes.Posts}>
        <div>
            <PostFormComponent onSubmit={onSubmit}/>
        </div>
        {addNewPostPage}
    </div>)
}


const textAreaFormPost = (props:InjectedFormProps<FormDataTypePost>) => {
    return (
        <form className={classes.formAddPost}  onSubmit={props.handleSubmit}>
            <div className={classes.fieldContainer}>
                <Field className={classes.fieldAddpost} name={'post'} component={Textarea} validate={[requaredField,maxLength20]} placeholder={'added post message'}/>
            </div>
            <div className={classes.btnAddPost}>
                <button >Add Post</button>
            </div>
        </form>
    )
}

const PostFormComponent = reduxForm<FormDataTypePost>({
    form:'post'
})(textAreaFormPost)
