import { CommonUtils } from '../commonUtils/commonUtils';

/* eslint-disable @typescript-eslint/no-explicit-any */
export class Logger {
    public static logMessage = (message: string, ...params: any[]): void => {
        if (CommonUtils.isBrowser()) {
            console.log('[CLIENT LOG]', message, ...params);
        } else {
            console.log(
                '[NEXT SERVER LOG]',
                message,
                JSON.stringify([...params.map(CommonUtils.jsonSafeStringify)]),
            );
        }
    };

    public static logError = (message: string, ...params: any[]): void => {
        if (CommonUtils.isBrowser()) {
            console.error('[CLIENT LOG]', message, ...params);
        } else {
            console.error(
                '[NEXT SERVER LOG]',
                message,
                JSON.stringify([...params.map(CommonUtils.jsonSafeStringify)]),
            );
        }
    };

    public static logWarn = (message: string, ...params: any[]): void => {
        if (CommonUtils.isBrowser()) {
            console.warn('[CLIENT LOG]', message, ...params);
        } else {
            console.warn(
                '[NEXT SERVER LOG]',
                message,
                JSON.stringify([...params.map(CommonUtils.jsonSafeStringify)]),
            );
        }
    };
}
