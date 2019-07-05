interface RouterConfig {
    [index: number]: {
        pathname: string;
        text: string;
        icon: string;
        key: string | number;
        children?: RouterConfig
    };
}

export const routerConfig: RouterConfig = [
    {
        pathname: '/app',
        text: 'abc',
        icon: '',
        key: ''
    },
    {
        pathname: '/login',
        text: 'abc',
        icon: '',
        key: ''
    }
];
