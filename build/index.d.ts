/// <reference types="node" />
import { ResizeImgBuffer } from "./main";
export declare class FileManager {
    exist: (path: string) => boolean;
    create: (path: string, data: string) => void;
    read: (path: string, raw?: boolean) => string | Buffer;
    readJSON: (path: string) => object | JSON;
    type: (path: string) => 'file' | 'directory';
    resizeImgBuffer: ({ buffer, options }: ResizeImgBuffer) => Promise<Buffer>;
    constructor();
}
export declare const fun: (msg: string) => string;
