import { CommonUtils } from '../commonUtils';

import {
    DATA_STORE_LOCAL_STORAGE_KEYS,
    DATA_STORE_SESSION_STORAGE_KEYS,
    DATA_STORE_COOKIE_STORAGE_KEYS,
} from './dataStore.config';
import { IUnknownRecord } from '@rbu/types';

export class DataStore {
    static isLocalStoreKey(key:string) {
        return DATA_STORE_LOCAL_STORAGE_KEYS.includes(key);
    }

    static isSessionStoreKey(key:string) {
        return DATA_STORE_SESSION_STORAGE_KEYS.includes(key);
    }

    static isCookieStoreKey(key:string) {
        return DATA_STORE_COOKIE_STORAGE_KEYS.includes(key);
    }

    static cleanStoreValue(val:string) {
        if (val === 'undefined') return undefined;

        if (val === 'null') return null;

        return val;
    }

    static setItem(key:string, value:string, options = {}) {
        if (value === undefined || key === undefined) return;

        if (this.isCookieStoreKey(key) || (options as IUnknownRecord).isCookie) {
            const cookieValue = encodeURIComponent(value);
            const cookieOptions = {
                path: '/',
                expires: (options as IUnknownRecord)?.expires || 365,
                secure: (options as IUnknownRecord)?.secure || false,
                sameSite: (options as IUnknownRecord)?.sameSite || 'Strict',
            };

            const cookieOptionEntries = Object.entries(cookieOptions);
            const cookieOptionString = cookieOptionEntries
                .map(([optionKey, optionValue]) => `${optionKey}=${optionValue}`)
                .join(';');

            const cookieString = `${key}=${cookieValue};${cookieOptionString}`;
            document.cookie = cookieString;
        }

        if (this.isSessionStoreKey(key) && CommonUtils.isBrowser()) {
            window?.sessionStorage.setItem(key, value);
        }

        if (this.isLocalStoreKey(key) && CommonUtils.isBrowser()) {
            window?.localStorage.setItem(key, value);
        }
    }

    static getItem(key:string) {
        // Todo: Get Cookie Value

        if (CommonUtils.isBrowser() && this.isCookieStoreKey(key)) {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith(`${key}=`))
                ?.split('=')[1] as string;

            return this.cleanStoreValue(cookieValue);
        }

        if (CommonUtils.isBrowser() && this.isSessionStoreKey(key)) {
            return this.cleanStoreValue(window?.sessionStorage.getItem(key) as string);
        }

        if (CommonUtils.isBrowser() && this.isLocalStoreKey(key)) {
            return this.cleanStoreValue(window?.localStorage.getItem(key) as string);
        }
    }
}
