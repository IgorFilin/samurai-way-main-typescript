import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

export const LoginForm = (props:InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'login'}  type="text" placeholder={'login'} component="input"/></div>
            <div><Field name={'password'} type="text" placeholder={'password'} component="input"/></div>
            <div><Field name={'rememberMe'} type="checkbox" component="input"/> remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginFormContainer = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)


export const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        return console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={onSubmit}/>
        </div>
    );
};

