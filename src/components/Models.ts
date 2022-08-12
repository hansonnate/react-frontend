export interface TabPillItemInput {
    id: string;
    name: string;
    to: string;
}

export interface SideMenuItemInput {
    id: string;
    name: string;
    to: string;
    iconClassName: string;
}

export interface TableHeadersInput {
    id: number,
    index: number,
    name: string,
    accessor: string,
    enabled: boolean,
    cell_style: Function | null,
}