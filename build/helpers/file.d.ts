/// <reference types="node" />
export declare class File {
    exist: (path: string) => boolean;
    create: (path: string, data: string) => void;
    read: (path: string, raw?: boolean) => string | Buffer;
    readJSON: (path: string) => object | JSON;
    type: (path: string) => 'file' | 'directory';
    constructor();
}
