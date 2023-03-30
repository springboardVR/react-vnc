export namespace amd {
    function appWriter(baseOutPath: any, scriptBasePath: any, outPath: any): Promise<string[]>;
}
export namespace commonjs {
    export function appWriter_1(baseOutPath: any, scriptBasePath: any, outPath: any): Promise<never[]>;
    export { appWriter_1 as appWriter };
    export const removeModules: boolean;
}
export namespace systemjs {
    export function appWriter_2(baseOutPath: any, scriptBasePath: any, outPath: any): Promise<string[]>;
    export { appWriter_2 as appWriter };
}
export const umd: {};
