import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react"
import { DropdownProps } from "./types"
import { getBoxStyles, getBoxStylesStyle, getDropdownListStyles, getDropdownProps, getListAnimationStyles, getListStyles, sortItems } from "./libs"
import { twMerge } from "tailwind-merge";
import { XMark } from "../../icons";

export function Dropdown<T extends string | number>(_props: Partial<DropdownProps<T>>){
    const props = getDropdownProps(_props);
    const [query, setQuery] = useState<string>('')
    
    const inputRef = useRef<HTMLInputElement>(null)
    const parentRef = useRef<HTMLDivElement>(null)

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const boxStyle = getBoxStyles(props.outline);
    const boxStylesStyle = getBoxStylesStyle(props.outline, props.rounded);

    const onQueryChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const _query = ev.target.value;
        handleQuery(_query);
    }

    const handleQuery = (item: T | string) => {
        const _query = `${item}`;
        setQuery(_query);
        props.onQueryChange && props.onQueryChange(_query);
    }

    const handleItemSelect = (item: T | string) => {
        handleQuery(item);
        setIsOpen(false)
    }

    const focusin = () => setIsOpen(true);

    const clickout = (ev: MouseEvent) => {
        if(!ev.target || !parentRef || !parentRef.current) return;
        if(parentRef.current.contains(ev.target as Node)) return;
        
        const isSame = parentRef.current.isSameNode(ev.target as Node);        
        if(isSame) return;

        setIsOpen(false);
    }

    useEffect(() => {

        if(!inputRef || !inputRef.current) return;

        inputRef.current.addEventListener('focusin', focusin)

        window.document.addEventListener('click', clickout)

        return () => {
            inputRef.current?.removeEventListener('focusin', focusin);
            window.document.removeEventListener('click', clickout);
        }

    }, [inputRef])

    const handleClearQuery = () => setQuery('');

    const darkModeStyles = props.darkMode ? 'dark' : '';
    
    return (
        <div className={darkModeStyles}>
            <div 
        ref={parentRef}
        className={twMerge('relative group', boxStyle)}
        style={{
            ...boxStylesStyle
        }}
        >
            <input 
            style={{...boxStylesStyle}}
            ref={inputRef} onChange={onQueryChange}
            type='text' placeholder={props.hint} value={query}
            className="border-none z-[400] dark:text-gray-300 dark:caret-slate-300 dark:placeholder-slate-400 outline-none pl-2 pr-12 py-4 peer dark:bg-slate-700"/>
            <DropdownList {...props} query={query} onQueryChange={handleItemSelect} isOpen={isOpen}/>
            {
                query.length > 0 && 
                <div className="size-4 absolute right-4 bottom-1 -translate-y-[100%]">
                    <XMark onClick={handleClearQuery}/>
                </div>
            }
        </div>
        </div>
    )
}

function DropdownList<T extends string | number>(props: DropdownProps<T> & {query: string, onQueryChange: (query: T | string) => void, isOpen: boolean},){

    const {query, items, isOpen, sort, limit, order} = props;
    
    const filteredItems = useMemo(() => {
        
        if(query.length==0) return sortItems({items: items, sort: sort, limit: limit, order: order});
        
        const _items = items.filter((item) => `${item}`.toLowerCase().toLowerCase().includes(query.toLowerCase()))

        return sortItems({items: _items, sort: sort, limit: limit, order: order});

        
    }, [query, items, isOpen, sort])

    const isEmptyList = items.length == 0;
    const noItemsFound = query.length !=0 && filteredItems.length==0 && !isEmptyList;

    const listStyles = `${getListStyles(props.outline)} ${getListAnimationStyles(isOpen, props.animation?.enabled!) }`;

    const onItemSelect = (item: T) => {
        props.onQueryChange(item);
        props.onItemSelect && props.onItemSelect(item);
    }

    return (
        <div
        style={{
            ...getDropdownListStyles(props),
        }}
        className={twMerge("absolute transition-opacity bg-white dark:bg-slate-700 z-[200] w-[calc(100%+2px)] left-[-1px]", listStyles)}>
            <ul
            style={{
                maxHeight: props.scrollable==false ? undefined : props.maxHeight!,
            }} 
            className={twMerge("flex w-full dark:scrollbar-dark scrollbar-dark flex-col overflow-y-auto scrollbar", '')}>
                {
                    isOpen && noItemsFound && <DropdownItem item={'No item Found'}/>
                }
                {
                    isOpen && isEmptyList && <DropdownItem item={'List is empty'}/>
                }
                { filteredItems.map((item, index) => <DropdownItem key={`${item}-`+index} item={item} onItemSelect={onItemSelect}/>)}
            </ul>
        </div>
    )
}

type DropdownItemProps<T extends string | number> = Pick<DropdownProps<T>, 'onItemSelect'> & {item: T};

function DropdownItem<T extends string | number>(props: DropdownItemProps<T>) {
    const handleClick = () => {
        props.onItemSelect && props.onItemSelect(props.item);
    }
    return (
        <li onClick={handleClick} 
        className="px-4 py-1 hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer text-gray-800 dark:text-gray-300">
            <p>{props.item}</p>
        </li>
    )
}
