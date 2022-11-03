import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

export const isMobile = (): boolean => {
    return width.value <= 790;
};
