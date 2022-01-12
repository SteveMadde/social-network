import React, {ChangeEvent} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const AddDialogInput = () => {
    const onSubmit = (formData: DialogsFormPropsType) => {
        console.log(formData)
    }
    return (
        <div>
           <h1>Chat</h1>
            <DialogsReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
type DialogsFormPropsType = {
    newMessage: string
    sendMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const DialogsInputForm: React.FC<InjectedFormProps<DialogsFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field placeholder='Enter' name='sendMessageChange' component={'newMessage'}
                    />
            </div>
        </form>
    );
};
export const DialogsReduxForm = reduxForm<DialogsFormPropsType>({
    form: 'textarea'
})(DialogsInputForm)

