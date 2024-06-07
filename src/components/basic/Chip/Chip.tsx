import { FC } from "react";
import { ChipProps } from "./ChipTypes";
import { getDefaultProps } from "./libs";
import { twMerge } from "tailwind-merge";
import { ChipDeleteIcon } from "../../../stories/Chip.components";

export const Chip: FC<Partial<ChipProps>> = (_props) => {
    const props = getDefaultProps(_props);

    const disabled = !props.enabled;
    const darkModeStyles = props.darkMode ? 'dark' : ''
    const enabledStyles = disabled ? 'opacity-[0.5]' : '';
    const clickStyles = props.onClick ? 'cursor-pointer hover:brightness-[1.2]' : '';
    const iconStyles = props.icon ? 'pr-10' : '';
    const selectedStyles = props.selected ? 'bg-opacity-[0.2] dark:bg-opacity-[0.8] bg-slate-400' : '';

    return (
        <li 
        onClick={props.onClick}
        style={{
            borderRadius: `${props.rounded}px`,
            outlineColor: props.color,
            color: props.color,
        }}
        className={twMerge("list-none outline outline-1 py-2 px-6 relative", enabledStyles, clickStyles,iconStyles, selectedStyles,darkModeStyles)}>
            <ChipIcon icon={props.icon} color={props.color} onIconClick={props.onIconClick}/>
            <p className="">{props.text}</p>
        </li>
    )
}

const ChipIcon: FC<Pick<ChipProps, 'icon' | 'color' | 'onIconClick'>> = ({icon, color, onIconClick}) => {
    const iconStyles = icon ? 'flex' : 'hidden'
    if(icon==undefined || icon==null) return null;
    return (
        <div className={twMerge("absolute left-0 bottom-0 items-center w-full h-full", iconStyles)}>
            <div 
            onClick={onIconClick}
            style={{
                color: color,
                stroke: color,
                fill: color,
            }}
            className="right-3 absolute hover:bg-gray-400 rounded-full p-1 h-5 w-5 -translate-y-[2px]e">
                {icon}
            </div>
        </div>
    )
}