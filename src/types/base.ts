/* eslint-disable */
import { SyntheticEvent } from 'react';

export type Maybe<T> = T | undefined;

export type DeepReadonly<T> = T extends (infer R)[]
    ? DeepReadonlyArray<R>
    : T extends Function
    ? T
    : T extends object
    ? DeepReadonlyObject<T>
    : T;

type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>;

type DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type IPrimitive = string | number | boolean | null | undefined | bigint | symbol;

export type IRecord<T> = Record<string, T>;

export type IEmptyRecord = IRecord<never>;
export type IUnknownRecord = IRecord<unknown>;
export type IStringRecord = IRecord<string>;
export type IBooleanRecord = IRecord<boolean>;
export type IPrimitiveRecord = IRecord<IPrimitive>;

export type IUnknownRecordPromise = Promise<IUnknownRecord>;

export type INullable<T> = T | null | undefined;

export type INullableString = INullable<string>;
export type INullableNumber = INullable<number>;
export type INullablePrimitive = INullable<IPrimitive>;

export type IVoidFunction = () => void;

export interface IApiResponse<T> {
    status?: string;
    data: T;
    success: boolean;
    error?: string;
}

export interface IApiResponseV2<T> {
    data: T;
    status: string;
}

export type IReactIFrameEvent = SyntheticEvent<HTMLIFrameElement>;

export type IReactEventHandler<T, P> = (e: T) => P;
export type IReactIFrameEventHandler = IReactEventHandler<DeepReadonly<IReactIFrameEvent>, void>;

export type IReactHTMLOnChangeEvent<T> = IReactEventHandler<React.ChangeEvent<HTMLInputElement>, T>;

export interface IEncryptData {
    algorithm: string;
    encryptedData: string;
}

export interface IPromiseWithAbortController<T> {
    promise: Promise<T>;
    abortController: AbortController;
}
