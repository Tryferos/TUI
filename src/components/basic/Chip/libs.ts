import { ChipProps } from "./ChipTypes";

export const getDefaultProps = (props: Partial<ChipProps>): ChipProps => {
    const darkMode = props.darkMode ?? false;
    return {
        text: props.text ?? 'Chip Text',
        selected: props.selected ?? false,
        darkMode: darkMode,
        enabled: props.enabled ?? true,
        rounded: 100,
        color: props.color ?? darkMode ? 'white' : 'black',
        ...props,
    }
}