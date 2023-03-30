export function initLogging(level: any): void;
export function getQueryVar(name: any, defVal: any): any;
export function getHashVar(name: any, defVal: any): any;
export function getConfigVar(name: any, defVal: any): any;
export function createCookie(name: any, value: any, days: any): void;
export function readCookie(name: any, defaultValue: any): any;
export function eraseCookie(name: any): void;
export function initSettings(): Promise<void>;
export function setSetting(name: any, value: any): void;
export function writeSetting(name: any, value: any): void;
export function readSetting(name: any, defaultValue: any): any;
export function eraseSetting(name: any): void;
export function injectParamIfMissing(path: any, param: any, value: any): string;
export function fetchJSON(path: any): Promise<any>;
