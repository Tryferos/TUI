import { CardInsideTags, CardProps, SmallDetailsProps } from "./types";


export const getCardProps = (props: CardProps): Required<CardProps> => {
    return {
        backgroundColor: props.backgroundColor ?? '#10b981',
        size: props.size ?? '30vw',
        onClick: props.onClick ?? (() => {}),
        tags: [],
        ...props
    }
}

export const getCardBoxStyle = 'rounded-t-md cursor-pointer transition-transform hover:scale-101 shadow-card hover:shadow-card-hover'

const bgColors: string[][] = [
    ['#ffffff', 'text-black', '#666666'],
    ['#f59e0b', 'text-white', '#d97706'],
    ['#22c55e', 'text-white', '#16a34a'],
    ['#14b8a6', 'text-white', '#0d9488'],
    ['#06b6d4', 'text-white', '#000000'],
    ['#0ea5e9', 'text-black', '#000000'],
    ['#a855f7', 'text-black', '#000000'],
    ['#f43f5e', 'text-black', '#000000'],
    ['#000000', 'text-white', '#ffffff']
];

export const getTagBackgroundColor = (index: number, props?: CardInsideTags) => {
    if(props?.textColor && props.backgroundColor && props.backColor){
        return [props.backgroundColor, props.textColor, props.backColor];
    }
    return bgColors[index%bgColors.length];
}