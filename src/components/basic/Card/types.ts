import { ReactElement } from "react"

export type CardInsideTags = {
    label: string;
    backgroundColor?: string;
    textColor?: string;
    backColor?: string;
}

export type CardProps = {
    image: string;
    backgroundColor?: string;
    label: string;
    description: string;
    size?: string;
    onClick?: () => void
    tags?: Array<CardInsideTags>
}

export interface CardSimpleProps extends CardProps {
}

export interface CardDetailsProps extends CardProps {
    extraDetails?: ReactElement;
    leading?: ReactElement;
}

export interface SmallDetailsProps extends Pick<CardProps, 'image' | 'tags' | 'backgroundColor' | 'size' | 'onClick'>{
    imageAlt?: string
}

/*
    Simple -> Image with label and description
    
    Detailed -> Image with label, description and extra details

    Small -> Image with tags inside it
*/