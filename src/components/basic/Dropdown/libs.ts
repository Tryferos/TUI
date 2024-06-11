import { getAnimationValues } from "../../libs";
import { DropdownProps } from "./types";

export function getDropdownProps<T extends string | number> (props: Partial<DropdownProps<T>>): DropdownProps<T>{
    return {
        animation: getAnimationValues(props.animation),
        darkMode: props.darkMode ?? false,
        order: props.order ?? 'desc',
        sort: props.sort ?? 'alphabetic',
        limit: props.limit ?? 20,
        maxHeight: props.maxHeight ?? '14vw',
        items: props.items ?? [],
        hint: props.hint ?? 'Search for items...',
        outline: props.outline ?? 'full',
        scrollable: props.scrollable ?? true,
        rounded: props.rounded ?? 10,
        filter: props.filter ?? false,
        search: props.search ?? true,
        ...props
    }
}

export const getBoxStyles = (outline: Pick<DropdownProps<any>, 'outline'>['outline']) => {
    if(outline=='full') return 'outline outline-1 border-none dark:outline-gray-300'
    return 'border-b-[1px] outline-none border-b-gray-500 shadow-box'
}

export const getListStyles = (outline: Pick<DropdownProps<any>, 'outline'>['outline']) => {
    return outline == 'full' ? 
    'border-[1px] border-t-[0px] dark:border-white rounded-b-md border-black translate-y-[100%]' : 
    'shadow-box dark:shadow-box-dark rounded mt-12 outline-1 outline-gray-300 dark:outline-slate-800 outline translate-y-[105%]';
}

export const getListAnimationStyles = (isOpen: boolean, animation: boolean) => {
    if(!animation){
        return isOpen ? 'opacity-1 flex' : 'hidden hover:flex group-focus-within:flex'
    }
    return isOpen ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none hover:pointer-events-auto group-focus-within:pointer-events-auto group-focus-within:opacity-1 hover:opacity-1'
}

export const getBoxStylesStyle = (outline: Pick<DropdownProps<any>, 'outline'>['outline'],rounded: Pick<DropdownProps<any>, 'rounded'>['rounded']) => 
({borderRadius: outline=='full' ? `${rounded}px` : undefined});

export function sortItems<T extends string | number>({items, sort, order, limit}: Pick<DropdownProps<T>, 'items' | 'sort' | 'order' | 'limit'>){
    return (() => {
        if(sort=='none' || items.length==0) return items;
        const sign = order=='desc' ? 1 : -1;

        if(sort=='alphabetic' || sort=='numeral'){
            return items.sort((a: T,b: T) => sign * `${a}`.localeCompare(`${b}`))
        }

        if(sort=='length'){
            return items.sort((a: T,b: T) => sign * (a.toString().length - b.toString().length))
        }

        return items;
    })().filter((_: T, index: number) => index < limit!)
}

export const getDropdownListStyles = ({outline, rounded, animation}: Pick<DropdownProps<any>, 'outline' | 'rounded' | 'animation'>) => {
    return {
        bottom: outline == 'underline' ? -1 : Math.min(rounded! / 1.3, 30),
        paddingTop: outline == 'underline' ? 2 : Math.max(Math.min(rounded! , 40), 12),
        transitionDuration: `${animation?.duration!}ms`,
        transitionDelay: `${animation?.delay!}ms`,
    }
}