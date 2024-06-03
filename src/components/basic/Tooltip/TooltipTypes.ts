import { FC, ReactNode } from "react";


export type TooltipProps = {
    children: ReactNode;
    text: string;
    topOffset?: number;
    canCopyTip?: boolean;
    position?: 'bottom' | 'top'
} & UIType;