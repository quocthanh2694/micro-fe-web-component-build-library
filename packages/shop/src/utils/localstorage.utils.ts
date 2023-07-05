import { IStore } from "src/interface/app";

enum LOCAL_STORAGE_KEY {
    appContext = 'appContext',
}

const set = (key: string, value: any) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch { }
}

const get = (key: string, defaultVal?: any) => {
    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultVal;
    } catch (e) {
        // if error, return initial value
        return defaultVal;
    }
}

export const getStorageAppContext = (defaultVal?: any): IStore => {
    return get(LOCAL_STORAGE_KEY.appContext, defaultVal);
}

export const setStorageAppContext = (value: IStore) => {
    set(LOCAL_STORAGE_KEY.appContext, value);
}