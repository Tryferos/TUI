import { CardProps } from "./types";


export const getCardProps = (props: CardProps): CardProps => {
    return {
        backgroundColor: props.backgroundColor ?? '#10b981',
        size: props.size ?? '20vw',
        ...props
    }
}