import {  ReactElement, ReactNode } from "react";
import { UIType } from "../../genericTypes";


export type TooltipProps = {
    children: ReactElement | ReactNode;
    text: string;
    offset?: number;
    canCopyTip?: boolean;
    position?: 'bottom' | 'top'
} & Partial<UIType>;