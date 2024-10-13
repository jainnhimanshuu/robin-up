export class StringUtils {
    public static isNull = (str: unknown): boolean => {
        if (str === null || str === undefined) return true;

        const stringifiedValue = `${str as string}`;

        if (stringifiedValue.toLowerCase() === 'null' || stringifiedValue.trim() === '')
            return true;

        return false;
    };

    public static isEmpty = (str: unknown): boolean => {
        if (str === null || str === undefined) return true;

        const stringifiedValue = `${str as string}`;

        if (stringifiedValue.trim() === '') return true;

        return false;
    };

    /**
     * Convert ascii string into base64
     * @param {*} str
     */
    public static encodeStrToBase64 = (str: string): string => {
        const strMod = unescape(encodeURIComponent(str));

        const buff = Buffer.from(strMod, 'ascii');

        return buff.toString('base64');
    };

    public static getCapitalizeStr = (str: string): string =>
        str ? str[0].toUpperCase() + str.slice(1) : '';

    public static isString(str: unknown): boolean {
        return typeof str === 'string' || str instanceof String;
    }
}
