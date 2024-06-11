import { FC } from "react";
import { getCardProps } from "./libs";
import { CardSimpleProps } from "./types";


const SimpleCard: FC<CardSimpleProps> = (_props) => {
    const props = getCardProps(_props);
    const handleClick = () => props.onClick && props.onClick();
    return (
        <section
        onClick={handleClick}
        className="shadow-card hover:cursor-pointer hover:scale-101 transition-transform hover:shadow-card-hover rounded-t rounded-b-md flex flex-col"
        style={{
            width: props.size,
            height: props.size,
        }}
        >
            <Image {...props}/>
            <Details {...props}/>
        </section>
    )
}

const Image: FC<CardSimpleProps> = (props) => {
    return (
        <div 
    style={{
        backgroundColor: props.backgroundColor
    }}
    className="w-full basis-[100%] rounded-t relative flex items-end justify-center">
        <img src={props.image} alt={props.label} className="" style={{objectFit: 'cover'}}/>
    </div>
    )
}

const Details: FC<CardSimpleProps> = (props) => {
    return (
        <div className="w-full min-h-[20%] px-2 py-2 pb-6">
            <p className="font-medium text-lg">{props.label}</p>
            <p className="font-medium text-sm text-gray-500">{props.description}</p>
        </div>
    )
}

export {SimpleCard}