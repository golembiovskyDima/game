import { useEffect, useState } from "react";

export const useIdleActivity = (minutsInterval: number = 1): [boolean, () => void] => {
    const [isTimeOut, setIsTimeOut] = useState(false);
    let timer: NodeJS.Timeout | null = null;

    const resetTimer = () => {
        if(timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            setIsTimeOut(true);
        }, 1000 * 10 * minutsInterval)
    }

    const continueTimer = () => {
        setIsTimeOut(false);
    };

    useEffect(() => {
        resetTimer();
        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('click', resetTimer);

        return () => {
            if (timer) {
              clearTimeout(timer);
              window.removeEventListener('mousemove', resetTimer);
              window.removeEventListener("click", resetTimer);
            }
          }
    }, [])

    useEffect(() => {
        if(isTimeOut && timer) {
            clearTimeout(timer);
        }
    }, [isTimeOut])

    return [isTimeOut, continueTimer];
}