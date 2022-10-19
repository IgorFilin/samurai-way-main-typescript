import React from 'react';
import {connect} from "react-redux";
import {loginUserThunkCreator, setErrorMessage} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/reduxStore";
import {Alert, Button, Checkbox, Form, Input} from 'antd';


export type LoginType = {
    loginUserThunkCreator: (dataForm:any) => void
}
export const LoginForm2 = (props: LoginType) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.loginUserThunkCreator(values)
    };
    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // }

    return (
        <div style={{marginTop: '50px',display:'flex',justifyContent:'center'}}>
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
                    <Input style={{width: '200px'}}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password style={{width: '200px'}}/>
                </Form.Item>

                <Form.Item name="rememberMe" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
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


const Login2 = (props: LoginPropsType) => {
    console.log(props.errorMessages)
    // const onSubmit = (formData:FormDataTypeLogin) => {
    //     props.AuthorizeUserThunkCreator(formData)
    // }

    const afterCloseHandler = () => {
        props.setError(null)
    }

    if (props.isAuth) {
        return <Redirect to={'profile/'}/>
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
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
export default connect(mapStateToProps, {loginUserThunkCreator,setError:setErrorMessage})(Login2)
