import { useRef,useEffect } from "react";


export const useInterval = (callback: () => void, delay: number, refresher: any) => {
    const intervalRef = useRef<number>();
    const savedCallback = useRef(callback);

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback,refresher]);

    useEffect(() => {
        const tick = () => savedCallback.current();

        intervalRef.current = window.setInterval(tick, delay);

        return () => window.clearInterval(intervalRef.current);
    }, [delay, refresher]);

    return intervalRef;
  }