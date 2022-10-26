export const isMobile = (): boolean => {
    const { userAgent } = navigator;
    const agents = [
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod',
    ];
    return agents.some(item => userAgent.includes(item));
};
