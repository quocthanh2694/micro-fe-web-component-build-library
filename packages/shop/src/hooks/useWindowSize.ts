import { useState, useEffect } from 'react';
import { SCREEN_BREAKPOINTS } from 'src/constants/constant';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        ...windowDimensions,
        isMobile: windowDimensions.width < SCREEN_BREAKPOINTS.tablet,
        isTablet: windowDimensions.width < SCREEN_BREAKPOINTS.desktop
    };
}
