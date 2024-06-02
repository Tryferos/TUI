import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { TooptipTypes } from "./TooltipTypes";
import { twMerge } from "tailwind-merge";
import { getAnimationValues, getCopyTipValue, getDarkModeValue } from "../libs";
import { CopyIcon } from "../icons";
import { useInterval } from "../hooks/useInterval";

const pointerEvents = 'pointer-events-none group-hover:pointer-events-auto';

const Tooltip: FC<TooptipTypes> = (props) => {
    const {children, topOffset, animation: animationProps, darkMode: darkModeProp} = props;

    const animation = getAnimationValues(animationProps)
    const darkMode = getDarkModeValue(darkModeProp);
    
    return (
        <div className={twMerge("group relative", darkMode)}>
            {children}
            <div className={twMerge("absolute w-full pointer-events-none", 'group-hover:pointer-events-auto peer-hover:pointer-events-none')} style={{height: topOffset ?? 0}}></div>
            <TooltipBox topOffset={topOffset} {...props}/>
        </div>
    )
}

const TooltipBox: FC<TooptipTypes> = (props) => {

    const {topOffset, text, canCopyTip: canCopyTipProp} = props;
    const canCopyTip = getCopyTipValue(canCopyTipProp);
    const [copied, setCopied] = useState<boolean>(false);
    const interval = 1500;

    const handleInterval = () => {
        if(!copied) return;

        setCopied(false)
    }

    useInterval(handleInterval, interval, copied);

    const handleCopyTip = () => {
        if(!canCopyTip || copied) return;
        navigator.clipboard.writeText(text);
        setCopied(true);
    }

    return (
        <div onClick={handleCopyTip}
        className={twMerge("hidden dark:bg-slate-800 group-hover:flex bg-white shadow-box rounded px-4 py-2 cursor-default absolute",pointerEvents, canCopyTip && 'py-6 px-6 cursor-pointer') }
        style={{top: topOffset ?? undefined}}
        >
           {
            canCopyTip &&
            <div className="absolute right-2 top-2 size-3">
                <CopyIcon/>
            </div>
           }
        <p className="whitespace-nowrap text-center w-full dark:text-gray-200 text-gray-600">{ copied ? 'Tip copied!' : text}</p>
        </div>
    )
}

export default Tooltip;