import React from "react";
import {StoreRedaxType} from "./components/Redax/Redax";



const StoreContext = React.createContext({} as StoreRedaxType)


export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContext;

export type ProviderType = {
    store: StoreRedaxType
    children: React.ReactNode
}
