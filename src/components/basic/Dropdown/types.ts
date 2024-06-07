

export type DropdownProps<T extends string | number> = {
    hint: string;
    items: T[],
    outline?: 'full' | 'underline',
    onQueryChange?: (query: string) => void;
    filter?: boolean;
    onItemSelect?: (item: T) => void;
    sort?: 'numeral' | 'alphabetic' | 'length' | 'none';
    order?: 'desc' | 'asc';
    limit?: number;
    scrollable?: boolean;
    maxHeight?: string;
    rounded?: number;
} & Partial<UIType>