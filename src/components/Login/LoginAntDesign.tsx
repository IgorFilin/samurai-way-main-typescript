import React from 'react';
import {connect} from "react-redux";
import {loginUserThunkCreator, setErrorMessage} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/reduxStore";
import {Alert, Button, Checkbox, Form, Input} from 'antd';
import classes from './LoginAndDesign.module.css'


export type LoginType = {
    loginUserThunkCreator: (dataForm:any) => void
}
export const LoginForm2 = (props: LoginType) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.loginUserThunkCreator(values)
    };

    return (
        <div className={classes.form}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item   name="rememberMe" valuePropName="checked" wrapperCol={{offset: 4, span: 16}}>
                    <Checkbox  >Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}


const LoginAntDesign = (props: LoginPropsType) => {
    const afterCloseHandler = () => {
        props.setError(null)
    }

    if (props.isAuth) {
        return <Redirect to={'profile/'}/>
    }
    return (
        <div className={classes.content}>
            {props.errorMessages && <Alert
                style={{width: '50%', height: '10%', alignSelf: 'center', marginBottom: '20px'}}
                message="Error"
                description={props.errorMessages}
                type="error"
                afterClose={afterCloseHandler}
                banner
                showIcon
                closable
            />}
            <div className={classes.textTestAccount}>

            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p><strong className={classes.boltText}>Email: free@samuraijs.com</strong></p>
            <p><strong className={classes.boltText}>Password: free</strong></p>
            </div>
            <LoginForm2   loginUserThunkCreator={props.loginUserThunkCreator}/>

        </div>
    );
};
type mapStateToPropsType = {
    isAuth: boolean
    errorMessages: null | string
}
type mapDispatchToPropsType = {
    loginUserThunkCreator: (dataForm:any) => void
    setError:(message:string | null)=> void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        errorMessages: state.auth.errorMessages
    }
}
// @ts-ignore
export default connect(mapStateToProps, {loginUserThunkCreator,setError:setErrorMessage})(LoginAntDesign)
