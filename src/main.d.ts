export interface ResizeImgBuffer {
    buffer: string | Buffer;
    options: {
        width: number,
        height: number,
        fit?: 'contain' | 'cover' | 'fill' | 'inside' | 'outside'
    }
}
// main.d.ts

declare module "./main" {
    export class FilesToolKit {
      exist: (path: string) => boolean;
      create: (path: string, data: string) => void;
      read: (path: string, raw?: boolean) => string | Buffer;
      readJSON: (path: string) => object | JSON;
      type: (path: string) => 'file' | 'directory';
      resizeImgBuffer: ({ buffer, options }: {
        buffer: string | Buffer;
        options: {
            width: number,
            height: number,
            fit?: 'contain' | 'cover' | 'fill' | 'inside' | 'outside'
        }
    }) => Promise<Buffer>;
    }
  
    export const fun: (msg: string) => string;
  }
  