import React from "react";
import s from "./ProfileStatus.module.css";

type ProfileStatusType = {
    status: string
    statusUpdate: (status: string) => void
    /*
        editMode: boolean
    */
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    onDoubleClickActiveMode = () => {
        this.setState({
            editMode: true
        })
    }

    onDoubleClickDeActiveMode = () => {
        this.setState({
            editMode: false
        })
        /*this.props.statusUpdate(this.state.status)*/
    }
    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <input autoFocus={true} onBlur={this.onDoubleClickDeActiveMode}
                               value={this.state.status}/>
                        :
                        <div>
                            <span onChange={this.onStatusChange}
                                  className={s.status}
                                  onDoubleClick={this.onDoubleClickActiveMode}> {this.props.status || "NOPE"}</span>
                        </div>
                }
            </div>
        )
    }
}