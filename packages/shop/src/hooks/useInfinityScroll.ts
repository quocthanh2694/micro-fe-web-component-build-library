import { useState, useEffect } from 'react';
import { INFINITY_SCROLL_THRESHOLD } from 'src/constants/pagination.constant';
import useWindowDimensions from './useWindowSize';

const useInfiniteScroll = (callback: () => void, hasMore?: boolean) => {
    const { isMobile } = useWindowDimensions();
    const [isFetching, setIsFetching] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile) return;
        if (!isFetching) return;
        if (!hasMore) {
            setIsFetching(false);
            return;
        }
        callback();
    }, [isFetching, isMobile]);

    function handleScroll() {
        if (!isMobile) return;
        if (!hasMore) return;

        const offsetBottom = Math.abs(window.innerHeight + document.documentElement.scrollTop - document.documentElement.offsetHeight);
        const stopEvent = offsetBottom > INFINITY_SCROLL_THRESHOLD || isFetching;
        if (stopEvent) return;
        setIsFetching(true);
    }

    return { isFetching, setIsFetching };
};

export default useInfiniteScroll;