import { DeepReadonly, IRecord, IStringRecord, IUnknownRecord } from '@rbu/types';
import { StringUtils } from '../stringUtils';
import { Logger } from '../logger';
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

export class CommonUtils {
    public static noop(): () => void {
        return function (): void {};
    }

    public static isBrowser(): boolean {
        return typeof window !== 'undefined';
    }

    public static getUrlParam(param: DeepReadonly<string>): string {
        const url = new URL(window.location.href);

        return url.searchParams.get(param) ?? '';
    }

    public static isUrlParamPresent(param: string): boolean {
        const url = new URL(window.location.href);

        return !CommonUtils.isNull(url.searchParams.get(param));
    }

    public static updateUrlParam(param: string, value: string, href?: string): URL {
        const url = new URL(href ?? window.location.href);
        url.searchParams.set(param, value);

        return url;
    }

    public static removeParam(param: string, href?: string): string {
        const url = new URL(href ?? window.location.href);

        url.searchParams.delete(param);

        return url.href;
    }

    public static jsonSafeParse<P>(str: string): P | null {
        try {
            return JSON.parse(str) as P;
        } catch (e) {
            Logger.logError("[Err][JSON Safe Parse]: ", e)
            return null;
        }
    }

    public static safeParseInt(str: unknown, fallback: number): number {
        try {
            const parsedInt = parseInt(str as string);

            if (typeof parsedInt === 'number' && !isNaN(parsedInt)) {
                return parsedInt;
            } else {
                return fallback;
            }
        } catch (e) {
            Logger.logError("[Err][Safe Parse Int]: ", e)
            return fallback;
        }
    }

    public static jsonSafeStringify(str: DeepReadonly<IUnknownRecord>): string | null {
        try {
            return JSON.stringify(str);
        } catch (e) {
            Logger.logError("[Err][JSON Safe Stringify]: ", e)
            return null;
        }
    }

    public static stringifyError(error: unknown): string {
        if (this.isNull(error)) return 'empty error';
        const errString = JSON.stringify(error, ['message', 'arguments', 'type', 'name', 'stack']);
        console.error('error string', errString);

        return errString;
    }

    static getUserAgent(): string {
        return window.navigator.userAgent;
    }

    static checkMobileDevice(ua = ''): boolean {
        const userAgent = CommonUtils.isBrowser() ? this.getUserAgent() : ua;

        let isMobile = false;

        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                userAgent,
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                userAgent.substr(0, 4),
            )
        ) {
            isMobile = true;
        }

        return isMobile;
    }

    /**
     *
     * @param {*} object
     * @param {*} keys
     * @description Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
     * @returns
     */
    static getObjVal(
        object: DeepReadonly<{ [key: string]: IUnknownRecord }> = {},
        keys: DeepReadonly<string[]> = [],
    ): IUnknownRecord {
        return keys.reduce(
            (prev: DeepReadonly<IUnknownRecord>, curr: string) => prev?.[curr] as IUnknownRecord,
            object,
        );
    }

    /**
     * @description returns boolean whether email is of valid format
     * @param email email string
     * @returns boolean value
     */

    static validEmail(email: string): boolean {
        if (StringUtils.isEmpty(email)) {
            return false;
        }

        if (
            !(
                /^[^\s@]+@[^\s@]+\.[^\s@]{2,5}$/.test(email) &&
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)
            )
        ) {
            return false;
        }

        return true;
    }

    /**
     * @description adds script inside body tag
     * @param attribute
     * @param text
     * @param callback
     */

    static addScript(
        attribute: DeepReadonly<IRecord<string>>,
        text?: string,
        callback?: () => void,
    ): void {
        const s = document.createElement('script');

        for (const attr in attribute) {
            s.setAttribute(attr, attribute[attr] ? attribute[attr] : '');
        }
        s.innerHTML = text ? text : '';

        if (callback) {
            s.onload = callback;
        }
        document.body.appendChild(s);
    }

    static addLink(
        attribute: DeepReadonly<IStringRecord>,
        text: string,
        callback: () => void,
    ): void {
        const s = document.createElement('link');

        for (const attr in attribute) {
            s.setAttribute(attr, (attribute[attr] ? attribute[attr] : null) as string);
        }
        s.innerHTML = text ? text : '';
        document.head.appendChild(s);

        if (callback) {
            callback();
        }
    }

    /**
     * @description adds script inside head tag
     * @param attribute
     * @param text
     * @param callback
     */

    static addScriptInsideHead(
        attribute: DeepReadonly<IRecord<string>>,
        text?: string,
        callback?: () => void,
    ): void {
        const s = document.createElement('script');

        for (const attr in attribute) {
            s.setAttribute(attr, attribute[attr] ? attribute[attr] : '');
        }
        s.innerHTML = text ? text : '';

        if (callback) {
            s.onload = callback;
        }
        document.head.appendChild(s);
    }

    /**
     * @description adds script inside footer tag
     * @param attribute
     * @param text
     * @param callback
     */

    static addScriptToFooter(
        attribute: DeepReadonly<IRecord<string>>,
        text?: string,
        callback?: () => void,
    ): void {
        const s = document.createElement('script');

        for (const attr in attribute) {
            s.setAttribute(attr, attribute[attr] ? attribute[attr] : '');
        }

        s.innerHTML = text ? text : '';

        if (callback) {
            s.onload = callback;
        }
        const footer = document.getElementsByTagName('footer')[0];
        footer?.appendChild(s);
    }

    public static isLocalEnv(path?: string): boolean {
        const hostName = path ?? window.location.host;

        return hostName.includes('localhost');
    }

    public static isDevEnv(): boolean {
        return process.env.NEXT_PUBLIC_ENV === 'development';
    }

    public static isProdEnv(): boolean {
        return process.env.NEXT_PUBLIC_ENV === 'production';
    }

    /**
     * @description utils function to dispatch custom event
     * @param eventName
     * @param data
     */
    static dispatchEvent(eventName: string, data?: DeepReadonly<IUnknownRecord>): void {
        if (!CommonUtils.isBrowser()) return;

        if (!data) {
            data = {};
        }
        const completeEvent = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(completeEvent);
    }

    public static getCookieExpiry(minutes: number): Date {
        const date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);

        return date;
    }
    public static safeAtob = (hourlyPay: string): string => {
        try {
            return window.atob(hourlyPay);
        } catch (err) {
            console.error('[Utils] Unable to parse atob', hourlyPay, err);

            return '';
        }
    };

    // Copied from here - https://stackoverflow.com/a/2117523/1518924
    public static generateUUID(replaceHyphens?: boolean): string {
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;

            return v.toString(16);
        });

        if (replaceHyphens) {
            return uuid.replace(new RegExp('-', 'g'), '');
        }

        return uuid;
    }

    public static extractTextFromHtmlString(str: string): string {
        const div = document.createElement('div');
        div.innerHTML = str;

        return div.textContent ?? div.innerText ?? '';
    }

    static isEmptyObj(obj: unknown): boolean {
        if (!obj) return false;

        return Object.entries(obj).length === 0;
    }

    static isNull(obj: unknown): boolean {
        return typeof obj === 'undefined' || obj === null;
    }

    public static isFunction(v: unknown): boolean {
        return typeof v === 'function';
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    public static debounce(fn: Function, wait = 1000, immediate?: boolean): Function {
        let timer: unknown = undefined;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        return function (this: Function, ...args: unknown[]): void {
            if (timer === undefined && immediate) {
                fn?.apply?.(this, args);
            }
            clearTimeout(timer as number);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            timer = setTimeout(() => fn?.apply?.(this, args), wait);
            // return timer;
        };
    }

    public static sleep(timeout: number): Promise<void> {
        return new Promise(res => setTimeout(res, timeout));
    }

    public static isDeepEqual(
        x: DeepReadonly<IUnknownRecord>,
        y: DeepReadonly<IUnknownRecord>,
    ): boolean {
        const ok = Object.keys,
            tx = typeof x,
            ty = typeof y;

        return x && y && tx === 'object' && tx === ty
            ? ok(x).length === ok(y).length &&
                  ok(x).every(key =>
                      CommonUtils.isDeepEqual(x[key] as IUnknownRecord, y[key] as IUnknownRecord),
                  )
            : x === y;
    }

    public static getUniqueElementsFromArray(rawArray: DeepReadonly<unknown[]>): unknown[] {
        return rawArray.filter((item, i, ar) => ar.indexOf(item) === i);
    }

    public static isValidNumber(num: string | number): boolean {
        return StringUtils.isNull(num) === false && !isNaN(Number(num));
    }

    public static getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    public static shuffleArray(array: DeepReadonly<React.ReactNode[]>): React.ReactNode[] {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }

    public static getPageLoadTime(): number {
        let duration = 0;

        if (window.performance) {
            try {
                window.performance
                    .getEntriesByType('navigation')
                    .forEach((navigation: DeepReadonly<PerformanceEntry>) => {
                        if ((navigation as PerformanceNavigationTiming).domContentLoadedEventEnd) {
                            duration = Math.floor(
                                (navigation as PerformanceNavigationTiming)
                                    .domContentLoadedEventEnd,
                            );
                        } else {
                            if (navigation.duration) {
                                duration = Math.floor(navigation.duration);
                            }
                        }
                    });
            } catch (e) {
                console.error('[ERROR]: getEntriesByType not supported by browser', e);
            }
        }

        return duration;
    }

    public static getPagePerformanceTiming(): number {
        let timeLoad = 0;

        if (window.performance?.timeOrigin) {
            try {
                timeLoad = Math.floor(window.performance.now());

                if (window.performance?.now()) {
                    if (timeLoad !== 0 && Math.abs(window.performance.now() - timeLoad) > 1000) {
                        console.error(`time log err::${timeLoad}::${window.performance.now()}`);
                    }
                }
            } catch (e) {
                console.error('[ERROR]: calculating timeload through time origin', e);
            }
        }

        return timeLoad;
    }

    public static convertSnakeToCamel(obj: DeepReadonly<IUnknownRecord>): IUnknownRecord {
        if (typeof obj !== 'object' || obj === null) {
            return obj; // Return non-object values as is
        }

        if (Array.isArray(obj)) {
            return obj;
        }

        const result = {};

        for (const key in obj) {
            // eslint-disable-next-line no-prototype-builtins
            if (obj.hasOwnProperty(key)) {
                const camelKey = key.replace(/_([a-z])/g, function (match, char) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
                    return char.toUpperCase();
                });

                result[camelKey as never] = CommonUtils.convertSnakeToCamel(
                    obj[key] as IUnknownRecord,
                ) as never; // Recursively convert nested objects
            }
        }

        return result;
    }

    public static convertCamelToSnake(obj: DeepReadonly<IUnknownRecord>): IUnknownRecord {
        if (typeof obj !== 'object' || obj === null) {
            return obj; // Return non-object values as is
        }

        if (Array.isArray(obj)) {
            return obj;
        }

        const result = {};

        for (const key in obj) {
            // eslint-disable-next-line no-prototype-builtins
            if (obj.hasOwnProperty(key)) {
                const snakeKey = key.replace(/[A-Z]/g, function (match) {
                    return `_${match.toLowerCase()}`;
                });
                result[snakeKey as never] = CommonUtils.convertCamelToSnake(
                    obj[key] as IUnknownRecord,
                ) as never; // Recursively convert nested objects
            }
        }

        return result;
    }

    public static extractRequiredHeaders = (
        reqHeaders: DeepReadonly<IUnknownRecord>,
    ): IUnknownRecord => {
        const browserUA = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36 Edg/100.0.1185.36`;
        const headers: IUnknownRecord = {
            'user-agent': reqHeaders ? reqHeaders['user-agent'] : browserUA,
        };

        const locationHeaders = [
            'x-appengine-user-ip',
            'fastly-client-ip',
            'x-forwarded-for',
            'X-Client-Geo-Location',
            'X-Client-Geo-Country',
            'X-Client-Geo-Region',
            'X-Client-Geo-City',
            'X-Client-Geo-LatLong',
        ];

        const extraHeaders = ['cookie'];

        const allHeaders = locationHeaders.concat(extraHeaders);

        for (const key of allHeaders) {
            if (reqHeaders !== null) {
                const lcKey = key.toLowerCase();

                if (reqHeaders[key]) headers[key] = reqHeaders[key];
                else if (reqHeaders[lcKey] !== null) headers[key] = reqHeaders[lcKey];
            }
        }

        return headers;
    };

    public static sleepPromise(timeout = 0): Promise<void> {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    public static createCookie(keyName: string, value: string, expiryDays = 365): void {
        let expires = '';

        if (expiryDays) {
            const date = new Date();
            date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${keyName}=${value}${expires}; path=/`;
    }

    public static getCookieFromString(
        name = '',
        cookieString = '',
        escapeQuotes = false,
    ): string | null {
        const nameWithEq = `${name}=`;
        const cookieArray = cookieString.split(';').map(cookieStr => decodeURIComponent(cookieStr));

        for (let cookieStr of cookieArray) {
            while (cookieStr.charAt(0) === ' ') {
                cookieStr = cookieStr.substr(1, cookieStr.length);
            }

            if (cookieStr.indexOf(nameWithEq) === 0) {
                const returnStr = cookieStr.substring(nameWithEq.length, cookieStr.length) || '';

                return escapeQuotes ? returnStr.replaceAll('"', '') : returnStr;
            }
        }

        return null;
    }

    public static isValidUrl = (url = ''): boolean => {
        url = url.trim();
        const pattern = new RegExp(
            '^([a-zA-Z]+:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-zA-Z\\d \\{\\}\\[\\]<>@%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', // fragment locator
            'i',
        );

        return pattern.test(url);
    };
}
