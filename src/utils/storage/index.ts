import constants from './constants';

type StorageType = 'local' | 'session';

const { BASE_KEY } = constants;
const get = (key: string, type?: StorageType) => {
    const storage = type === 'session' ? sessionStorage : localStorage;
    const value = storage.getItem(`${BASE_KEY}-${key}`);
    return value ? JSON.parse(value) : null;
};
const set = (key: string, value: any, type?: StorageType) => {
    if (type === 'session') {
        sessionStorage.setItem(`${BASE_KEY}-${key}`, JSON.stringify(value));
    } else {
        const expire = new Date().getTime();
        localStorage.setItem(
            `${BASE_KEY}-${key}`,
            JSON.stringify({ value, expire })
        );
    }
};
const del = (key: string, type?: StorageType) => {
    const storage = type === 'session' ? sessionStorage : localStorage;
    storage.removeItem(`${BASE_KEY}-${key}`);
};
const clear = (type?: StorageType) => {
    const storage = type === 'session' ? sessionStorage : localStorage;
    storage.clear();
};

export const Storage = { get, set, del, clear };
export const Constants = constants;
