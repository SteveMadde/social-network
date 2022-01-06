import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormPropsType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={'input'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormPropsType>({
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormPropsType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Log in</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

