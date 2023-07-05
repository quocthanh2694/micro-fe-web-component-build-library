import { MutableRefObject, useEffect } from "react";

export const useClickOutside = (ref: MutableRefObject<HTMLDivElement | null>, onClickOutside: () => void) => {
    useEffect(() => {
        /**
         * Invoke Function onClick outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref?.current && !ref?.current.contains(event.target as Node)) {
                onClickOutside();
            }
        }
        // Bind
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // dispose
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}