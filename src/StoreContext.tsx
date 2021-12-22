import React from "react";
import {StoreReduxType} from "./components/Redax/Redax";



const StoreContext = React.createContext({} as StoreReduxType)


export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export type ProviderType = {
    store: StoreReduxType
    children: React.ReactNode
}
