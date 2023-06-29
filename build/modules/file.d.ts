/// <reference types="node" />
import { ResizeImgBuffer } from '../main';
export declare const _exist: (path: string) => boolean;
export declare const _create: (path: string, data: string) => void;
export declare const _read: (path: string, raw?: boolean) => string | Buffer;
export declare const _readJSON: (path: string) => object | JSON;
export declare const _type: (path: string) => 'file' | 'directory';
export declare const _resizeImgBuffer: ({ buffer, options }: ResizeImgBuffer) => Promise<Buffer>;
