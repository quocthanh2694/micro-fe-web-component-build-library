import { useCallback, useEffect, useRef } from "react";

const useInterval = (callback: Function, delay: number) => {
    const savedCallback = useRef(callback);
    const intervalRef = useRef<any>(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(savedCallback.current, delay);
            intervalRef.current = id;
            return () => clearInterval(id);
        }
    }, [delay]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, [])

    const reset = useCallback(() => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(savedCallback.current, delay)
        }
    }, []);

    const stop = useCallback(() => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
    }, [])

    return {
        reset,
        stop
    };
};
export default useInterval;