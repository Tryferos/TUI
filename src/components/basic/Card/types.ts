import { ReactElement } from "react"


export type CardProps = {
    image: string;
    backgroundColor?: string;
    label: string;
    description: string;
    size?: string;
    onClick?: () => void
}

export interface CardSimpleProps extends CardProps {
}

export interface CardDetailsProps extends CardProps {
    extraDetails: ReactElement;
    leading: ReactElement;
}

export interface SmallDetailsProps extends Pick<CardProps, 'image' | 'label' | 'backgroundColor'>{
    
}

/*
    Simple -> Image with label and description
    
    Detailed -> Image with label, description and extra details

    Small -> Image with label inside it
*/