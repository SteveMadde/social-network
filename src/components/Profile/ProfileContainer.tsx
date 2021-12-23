import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileId, setUserProfile} from "./Profile_Reducer";
import {StateType} from "../Redax/Redax";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileType} from "../../api";

type mapStateToPropsType = {
    profile: ProfileType
}
type PathParamsType = {
    userId: string
}
type ProfileContainerType = {
    getProfileId: (userId: string) => void
    profile: ProfileType
}
type OwnPropsType = mapStateToPropsType & ProfileContainerType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        const userId = this.props.match.params.userId
        if (userId) {
            this.props.getProfileId(userId)
        }
    }

    /*let userId = this.props.match.params.userId
    usersApi.profile(userId).then((data) => {
             this.props.setUserProfile(data)
         })
 }*/
    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getProfileId})(WithUrlDataContainerComponent)