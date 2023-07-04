import fs from 'fs';
import { basename, dirname, extname } from 'path';
import sharp from 'sharp';


export const _exist = (path: string) => {
    if (fs.existsSync(path)) return true;
    return false;
}

export const _create = (path: string, data: string|Buffer) => {
    if (_type(path) != 'file') throw new Error(`path:"${path}" is not a file path`);
    // if (isFileOrDirectory(path) != 'file') throw new Error(`path:"${path}" is not a file path`)
    fs.mkdirSync(dirname(path), { recursive: true });
    fs.writeFileSync(path, `${data}`);
}

export const _read = (path: string, raw?: boolean): string | Buffer => {
    if (_type(path) != 'file') throw new Error(`path:${path} is not a file`);
    if (!_exist(path)) throw new Error(`file:${path} not exist`);
    let data = fs.readFileSync(path);
    return (raw ? data : data.toString('utf8'));
}

export const _readJSON = (path: string): object|JSON => {
    if (_type(path) != 'file') throw new Error(`path:${path} is not a file`);
    if (!_exist(path)) throw new Error(`file:${path} not exist`);
    let data:string|Buffer = fs.readFileSync(path);
    data = data.toString('utf8');
    return (JSON.parse(data));
}

export const _type = (path: string): 'file' | 'directory' => {
    path = basename(path);
    const extension = extname(path);
    if (!extension) return 'directory';
    return 'file';
}


export const _resizeImgBuffer = async({buffer,options}:{
    buffer: string | Buffer;
    options: {
      width: number;
      height: number;
      fit?: 'contain' | 'cover' | 'fill' | 'inside' | 'outside';
    };
  }):Promise<Buffer>=>{
    // const img = await sharp(buffer).resize(options).toBuffer();
    const img = sharp(buffer).resize(options).toBuffer();
    return img
}
