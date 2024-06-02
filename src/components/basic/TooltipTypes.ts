import { FC, ReactNode } from "react";


export type TooptipTypes = {
    children: ReactNode;
    text: string;
    topOffset?: number;
    canCopyTip?: boolean;
    position?: 'bottom' | 'top'
} & UIType;