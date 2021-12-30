import React from "react";
import s from "./ProfileStatus.module.css";

type ProfileStatusType = {
    status: string
    /*
        editMode: boolean
    */
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        title: 'privet'
    }

    onDoubleClickActiveMode() {
        this.setState({
            editMode: true
        })
    }

    onDoubleClickDeActiveMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (

            <div className={s.status}>


                {
                    this.state.editMode ?
                        <input autoFocus={true} onBlur={this.onDoubleClickDeActiveMode.bind(this)}
                               value={this.props.status}/>
                        :
                        <div>
                            <span onDoubleClick={this.onDoubleClickActiveMode.bind(this)}> {this.props.status}</span>
                        </div>
                }
            </div>
        )
    }
}