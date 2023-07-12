import { MutableRefObject, useEffect } from "react";

export const useClickOutside = (ref: MutableRefObject<HTMLDivElement | null>, onClickOutside: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref?.current && !ref?.current.contains(event.target as Node)) {
                onClickOutside();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}