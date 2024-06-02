import { FC, ReactNode, useEffect, useRef } from "react";
import { TooptipTypes } from "./TooltipTypes";
import { twMerge } from "tailwind-merge";
import { getAnimationValues, getCopyTipValue, getDarkModeValue } from "../libs";



const Tooltip: FC<TooptipTypes> = (props) => {
    const {children, text, topOffset, animation: animationProps, darkMode: darkModeProp, canCopyTip: canCopyTipProp} = props;

    const pointerEvents = 'pointer-events-none group-hover:pointer-events-auto';
    const animation = getAnimationValues(animationProps)
    const darkMode = getDarkModeValue(darkModeProp);
    const canCopyTip = getCopyTipValue(canCopyTipProp);
    
    return (
        <div className={twMerge("group relative", darkMode)}>
            {children}
            <div className={twMerge("absolute w-full pointer-events-none", 'group-hover:pointer-events-auto peer-hover:pointer-events-none')} style={{height: topOffset ?? 0}}></div>
            <div 
            className={twMerge("hidden dark:bg-slate-800 group-hover:flex  bg-white shadow-box rounded px-4 py-2 cursor-default absolute",pointerEvents) }
            style={{top: topOffset ?? undefined}}
            >
               <p className="whitespace-nowrap text-center w-full dark:text-gray-200 text-gray-600">{text}</p>
            </div>
        </div>
    )
}

export default Tooltip;