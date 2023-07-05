import { createContext } from "react";
import { IAppContext, IStore } from "src/interface/app";

export const defaultAppContextValue: IStore = {
    user: undefined,
    cartItems: [],
}

export const appContext = createContext<IAppContext>({
    state: defaultAppContextValue,
    dispatch: () => { },
});