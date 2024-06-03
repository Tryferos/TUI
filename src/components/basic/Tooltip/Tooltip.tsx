import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { TooltipProps } from "./TooltipTypes";
import { twMerge } from "tailwind-merge";
import { getAnimationStyles, getAnimationTransitions, getAnimationValues, getDarkModeValue, mapAnimationType } from "../../libs";
import { CopyIcon } from "../../icons";
import { useInterval } from "../../hooks/useInterval";
import { getCopyTipValue } from "./libs";

const pointerEvents = 'pointer-events-none group-hover:pointer-events-auto';

const Tooltip: FC<TooltipProps> = (props) => {
    const {children, topOffset, animation: animationProps, darkMode: darkModeProp} = props;

    const darkMode = getDarkModeValue(darkModeProp);
    
    return (
        <div className={twMerge("group relative", darkMode)}>
            {children}
            <div className={twMerge("absolute hidden group-hover:flex w-full pointer-events-none", 'group-hover:pointer-events-auto peer-hover:pointer-events-none')} style={{height: topOffset ?? 0}}></div>
            <TooltipBox topOffset={topOffset} {...props}/>
        </div>
    )
}

const TooltipBox: FC<TooltipProps> = (props) => {

    const {topOffset, text, canCopyTip: canCopyTipProp, animation: animationProps} = props;
    const canCopyTip = getCopyTipValue(canCopyTipProp);
    const animations = getAnimationValues(animationProps)

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

    const copyTipStyles = canCopyTip ? 'py-6 px-6 cursor-pointer' : '';
    
    const animationsStyles =  getAnimationStyles(animations);

     const getAnimationTransitionsStyles = getAnimationTransitions(animations.properties);

    return (
        <div onClick={handleCopyTip}
        className={twMerge("dark:bg-slate-800 transition-[scale] bg-white shadow-box rounded px-4 py-2 cursor-default absolute opacity-0 group-hover:opacity-100",
        pointerEvents, copyTipStyles, animationsStyles, getAnimationTransitionsStyles) }
        
        style={{top: topOffset ?? undefined, transitionDuration: `${animations.duration}ms`, transitionDelay: `${animations.delay}ms`}}
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