import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "./Profile_Reducer";
import {StateType} from "../Redax/Redax";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileType, usersApi} from "../../api";

type mapStateToPropsType = {
    profile: ProfileType
}
type PathParamsType = {
    userId: string
}
type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}
type OwnPropsType = mapStateToPropsType & ProfileContainerType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class  ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
       let userId = this.props.match.params.userId
       usersApi.profile(userId).then((data) => {
                this.props.setUserProfile(data)
            })
    }
    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)