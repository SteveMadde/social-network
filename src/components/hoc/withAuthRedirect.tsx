import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../Redax/Redax";


let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR902RJC3cTa0lmh3Nium-hx04DHYJJOteqQw&usqp=CAU'

type RedirectComponentType = {
    isAuth: boolean
}

/*const mapStateToProps = (state: StateType) => ({
    isAuth: state.authData.isAuth
})*/
const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.authData.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: RedirectComponentType) => {
        let {isAuth, ...restProps} = props
        if (isAuth) {
            return <Component {...restProps as T}/>
        } else {
            return <Redirect to='/login'/>
        }
    }
    return connect(mapStateToProps, {})(RedirectComponent)
}