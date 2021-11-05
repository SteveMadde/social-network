import React from "react";
import {StoreType} from "./components/Redax/State";


const StoreContext = React.createContext({} as StoreType)


export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContext;

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}
