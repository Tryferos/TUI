import { FC } from "react";
import { getCardBoxStyle, getCardProps, getTagBackgroundColor } from "./libs";
import { CardDetailsProps, CardInsideTags, CardProps, CardSimpleProps, SmallDetailsProps } from "./types";
import { twMerge } from "tailwind-merge";

export const SmallCard: FC<SmallDetailsProps> = (_props) => {
    const props = getCardProps({..._props, size: _props.size ?? '15vw'} as CardProps);
    const imageAlt = _props.imageAlt ?? 'Small Card image'
    return (
        <figure 
        style={{
            width: props.size,
            height: parseInt(props.size)*1.2+'vw',
            backgroundColor: props.backgroundColor,
        }}
        className={twMerge("relative flex justify-center items-end",getCardBoxStyle)}>
            <img src={props.image} alt={imageAlt}/>
            <ul className="absolute left-4 w-[calc(100%-32px)] top-2 flex flex-wrap gap-x-4 gap-y-2 justify-between">
            {
                props.tags.map((item, index) => {
                    const [bgStyle, textStyle] = getTagBackgroundColor(index, props)
                    return (
                        <li 
                        style={{
                            backgroundColor: bgStyle,
                        }}
                        className={twMerge('py-2 px-4 rounded font-medium', textStyle)}>
                            {item.label}
                        </li>
                    )
                })
            }
            </ul>
        </figure>
    )
}

const SimpleCard: FC<CardSimpleProps> = (_props) => {
    return <DetailedCard {..._props}/>
}

const DetailedCard: FC<CardDetailsProps> = (_props) => {

    const props = getCardProps(_props);
    const handleClick = () => props.onClick();

    return (
        <section
        onClick={handleClick}
        className={twMerge("rounded-b-md flex flex-col relative", getCardBoxStyle)}
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
    return (
        <>
        <li
        style={{
            backgroundColor: bgStyle,
        }} 
        className={twMerge('rounded-b-md w-16 h-12 flex items-center justify-center brightness-110 relative', textStyle)}>
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
        className="w-3 h-5 absolute top-[2px] rotate-[35deg] -z-[100]"></div>
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

const Image: FC<CardDetailsProps> = (props) => {
    const imageStyles = props.extraDetails ? 'basis-[75%]' : 'basis-[80%]'
    return (
        <div className={twMerge("w-full rounded-t relative flex items-end justify-center", imageStyles)}>
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

const Details: FC<CardDetailsProps> = (props) => {
    const detailsStyles = props.extraDetails ? '' : 'flex flex-col gap-y-2'
    const descStyles = props.extraDetails ? 'line-clamp-1' : 'line-clamp-2'
    return (
        <div className={twMerge("w-full min-h-[15%] px-2 py-2 pb-4", detailsStyles)}>
            <p className="font-semibold text-lg line-clamp-2 leading-6">{props.label}</p>
            <p className={twMerge("font-medium text-sm text-gray-600", descStyles)}>{props.description}</p>
        </div>
    )
}

export {SimpleCard, DetailedCard}