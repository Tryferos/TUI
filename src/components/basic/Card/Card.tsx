import { FC } from "react";
import { getCardProps, getTagBackgroundColor } from "./libs";
import { CardDetailsProps, CardInsideTags, CardSimpleProps } from "./types";
import { twMerge } from "tailwind-merge";

const SimpleCard: FC<CardSimpleProps> = (_props) => {
    return <DetailedCard {..._props}/>
}

const DetailedCard: FC<CardDetailsProps> = (_props) => {

    const props = getCardProps(_props);
    const handleClick = () => props.onClick();

    return (
        <section
        onClick={handleClick}
        className="shadow-card hover:cursor-pointer hover:scale-101 transition-transform hover:shadow-card-hover rounded-t rounded-b-md flex flex-col relative"
        style={{
            width: props.size,
            height: props.size,
        }}
        >
            <Image {...props}/>
            <Details {...props}/>
            <ExtraDetails {...props}/>
        </section>
    )
}

const InsideLabels: FC<Pick<CardDetailsProps, 'tags'>> = (props) => {
    return (
        <ul className="absolute left-0 -top-4 px-12 flex gap-x-4 flex-wrap">
            {
                props.tags?.map(
                    (item, index) => <InsideLabelItem {...item} index={index}/>
                ) ?? null
            }
        </ul>
    )
}

const InsideLabelItem: FC<CardInsideTags & {index: number}> = (props) => {
    const [bgStyle, textStyle, backStyle] = getTagBackgroundColor(props.index, props)
    // if(index>)
    return (
        <>
        <li
        style={{
            backgroundColor: bgStyle,
        }} 
        className={twMerge('rounded-b-md w-16 h-10 flex items-center justify-center brightness-110 relative', textStyle)}>
            <p 
            className="z-[100] truncate font-medium">{props.label}</p>
        </li>
        <div 
        style={{
            //40 = left offset
            //64 = each box's width
            //16 = gap
            left: 40 + 64*props.index + 16*props.index,
            backgroundColor: backStyle
        }}
        className="w-3 h-5 absolute top-[2px] rotate-45 -z-[100]"></div>
        </>
    )
}

const ExtraDetails: FC<CardDetailsProps> = (props) => {
    if(!props.extraDetails) return null;
    return (
        <div className="px-2 py-[clamp(6px,1vw,12px)] border-t-[1px] border-t-gray-200 text-gray-600 line-clamp-1">
            {props.extraDetails}
        </div>
    )
}

const Image: FC<Required<CardSimpleProps>> = (props) => {
    return (
        <div className="w-full basis-[75%] rounded-t relative flex items-end justify-center">
            <InsideLabels tags={props.tags}/>
            <figure 
            style={{
                backgroundColor: props.backgroundColor
            }}
            className="size-full flex items-end">
                <img src={props.image} alt={props.label} className="z-[200]" style={{objectFit: 'cover'}}/>
            </figure>
        </div>
    )
}

const Details: FC<Required<CardSimpleProps>> = (props) => {
    return (
        <div className="w-full min-h-[15%] px-2 py-2 pb-4">
            <p className="font-semibold text-lg line-clamp-2 leading-6">{props.label}</p>
            <p className="font-medium text-sm text-gray-600 line-clamp-1">{props.description}</p>
        </div>
    )
}

export {SimpleCard, DetailedCard}