import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";


export const AddDialogsButton = () => {
    const onSubmit = (formData: DialogsButtonFormPropsType) => {
        console.log(formData)
    }
    return (
        <div>
            <DialogsReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
type DialogsButtonFormPropsType = {

}

export const DialogsButtonForm: React.FC<InjectedFormProps<DialogsButtonFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <button>add message</button>
            </div>
        </form>
    );
};
export const DialogsReduxForm = reduxForm<DialogsButtonFormPropsType>({
    form: 'button'
})(DialogsButtonForm)

