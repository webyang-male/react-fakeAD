export interface MenuItemInfoType {
    name: string;
    menuChildren: MenuItemChild[];
    url: string;
}

export interface MenuItemChild {
    label: string;
    url: string;
}
