import { useEffect, useReducer } from "react";
import { appReducer } from "./reducer";
import { appContext, defaultAppContextValue } from "./context";
import {
  getStorageAppContext,
  setStorageAppContext,
} from "src/utils/localstorage.utils";

export const AppProvider = (props: any) => {
  const [state, dispatch] = useReducer(
    appReducer,
    // default value
    getStorageAppContext(defaultAppContextValue)
  );

  // save app context to localStorage
  useEffect(() => {
    setStorageAppContext(state);
  }, [state]);

  const Provider: any = appContext.Provider;

  return <Provider value={{ state, dispatch }}>{props.children}</Provider>;
};
