import { ReactElement } from "react";

export type ChipProps = {
    text: string;
    selected: boolean;
    rounded: number;
    onClick?: () => any;
    onIconClick?: () => any;
    icon?: ReactElement | string;
    enabled: boolean;
    color: string;
} & Omit<UIType, 'animation'>;
