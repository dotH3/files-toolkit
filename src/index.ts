
//   console.log((Buffer.byteLength(buffer) / (1024 * 1024)).toFixed(2)+' MB');


import { ResizeImgBuffer } from "./main";
import { _create, _exist, _read, _readJSON, _resizeImgBuffer, _type } from "./modules/file";

export class FileManager {
  exist: (path:string)=>boolean;
  create: (path:string, data:string)=>void;
  read: (path:string, raw?:boolean)=>string|Buffer;
  readJSON: (path:string)=>object|JSON;
  type: (path:string)=>'file'|'directory';
  resizeImgBuffer: ({ buffer, options }: ResizeImgBuffer) => Promise<Buffer>;
  
  constructor(){
      this.exist = _exist;
      this.create = _create;
      this.read = _read;
      this.readJSON = _readJSON;
      this.type = _type;
      this.resizeImgBuffer = _resizeImgBuffer;
  }
}

export const fun = (msg:string):string=>{
  return msg
}
