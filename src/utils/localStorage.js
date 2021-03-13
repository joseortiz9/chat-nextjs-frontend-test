
export const setLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, encodeValue(value));
    }
};

export const removeLocaleStorage = (key) => {
    if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
    }
};

export const getLocaleStorage = (key) => {
    if (typeof window !== 'undefined') {
        const value = window.localStorage.getItem(key);
        return decodeValue(value);
    }
    return null;
};

export function decodeValue(val) {
    if (typeof val === 'string') {
        try {
            return JSON.parse(val);
        } catch (e) {
            console.log('(decodeValue) not_parse_value');
        }
    }
    return val;
}

export function encodeValue(val) {
    if (typeof val === 'string') return val;
    return JSON.stringify(val);
}