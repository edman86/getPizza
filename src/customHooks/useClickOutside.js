import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {

    const domNodeRef = useRef();
    
    useEffect(() => {
        // handle outside click
        const outsideClickHandler = (e) => {
            if (!domNodeRef.current.contains(e.target)) {
                handler();
            }
            return;
        }
        document.addEventListener('mousedown', outsideClickHandler);

        return () => {
            document.removeEventListener('mousedown', outsideClickHandler);
        }
    }, []);

    return domNodeRef;
}