import { useCallback, useEffect, useRef } from 'react';

type CallbackType = () => void;
type ReturnType = [() => void, () => void];

const useInterval = (callback: CallbackType, delay: number): ReturnType => {
    const savedCallback = useRef<CallbackType>();
    const timerId = useRef<NodeJS.Timer>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    const handleStart = useCallback(() => {
        if (delay !== null) {
            timerId.current = setInterval(() => {
                if (savedCallback.current) {
                    savedCallback.current();
                }
            }, delay);
        }
    }, [savedCallback, delay]);

    const handleClear = useCallback(() => {
        if (timerId.current) {
            clearInterval(timerId.current);
        }
    }, []);

    return [handleStart, handleClear];
};

export default useInterval;
