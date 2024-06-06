import { FC, ReactElement, ReactNode } from "react";


export type TooltipProps = {
    children: ReactElement | ReactNode;
    text: string;
    offset?: number;
    canCopyTip?: boolean;
    position?: 'bottom' | 'top'
} & Partial<UIType>;