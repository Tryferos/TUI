import React, { FC,MouseEvent } from "react"

type ClickProps = {
    onClick: (ev: MouseEvent<SVGSVGElement>) => void;
}

export const CopyIcon: FC = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" stroke="black"  fill='black' viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>
}

export const XMark: FC<ClickProps> = (props) => {
    const onClick = (ev: MouseEvent<SVGSVGElement>) => {
        ev.preventDefault();
        ev.stopPropagation();
        props.onClick(ev);
    }
    return <svg onClick={(ev) => onClick(ev)} xmlns="http://www.w3.org/2000/svg" className="size-4 cursor-pointer" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
}