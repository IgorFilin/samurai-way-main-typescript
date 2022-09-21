import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {AuthorizeUserThunkCreator} from "../redux/authReducer";
import {Input} from "../common/FormsControls/FormsControls";
import {requaredField} from "../utils/validators/validators";

export type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
export const LoginForm = (props:InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'}  type="text" placeholder={'email'} component={Input} validate={[requaredField]}/></div>
            <div><Field name={'password'} type="text" placeholder={'password'} component={Input} validate={[requaredField]}/></div>
            <div><Field name={'rememberMe'} type="checkbox" component={Input} validate={[requaredField]}/> remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginFormContainer = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props:LoginPropsType) => {

    const onSubmit = (formData:FormDataType) => {
        props.AuthorizeUserThunkCreator(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={onSubmit}/>
        </div>
    );
};
type mapStateToPropsType = {

}
type mapDispatchToPropsType = {
    AuthorizeUserThunkCreator:(dataForm:FormDataType)=>void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = ():mapStateToPropsType => {
    return {

    }
}
export default connect(mapStateToProps,{AuthorizeUserThunkCreator})(Login)
