import React from "react";
import {StateType} from "../Redax/Redax";
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuthMe} from "./auth_Reducer";


type HeaderContainerType = {
    login: string
    isAuth: boolean
    getAuthMe: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthMe()
    }

    /*usersApi.authMe().then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data)
            }
        })
}*/

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

let mapStateToProps = (state: StateType) => ({
    isAuth: state.authData.isAuth,
    login: state.authData.data.login
})

/*let WithUrlDataContainerComponent = withRouter(HeaderContainer)*/

export default connect(mapStateToProps, {getAuthMe})(HeaderContainer)