import React from "react";
import {StateType} from "../Redax/Redax";
import {connect} from "react-redux";
import {Header} from "./Header";
import {DataType, setAuthUserData} from "./auth_Reducer";
import {usersApi} from "../../api";


type HeaderContainerType = {
    setAuthUserData: (data: DataType) => void
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        usersApi.authMe().then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
                }
            })
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

let mapStateToProps = (state: StateType) => ({
    isAuth: state.setAuthUserData.isAuth,
    login: state.setAuthUserData.data.login
})

/*let WithUrlDataContainerComponent = withRouter(HeaderContainer)*/

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)