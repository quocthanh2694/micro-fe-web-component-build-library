import { createContext } from "react";
import { IAppContext } from "src/interface/app";

export const defaultAppContextValue: IAppContext = {
    user: undefined,
    cartItems: [],
}

export const appContext = createContext<IAppContext>({
    user: undefined,
    cartItems: [],
});