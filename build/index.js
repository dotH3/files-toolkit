"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesToolKit = void 0;
//   console.log((Buffer.byteLength(buffer) / (1024 * 1024)).toFixed(2)+' MB');
var file_1 = require("./modules/file");
var FilesToolKit = /** @class */ (function () {
    function FilesToolKit() {
        this.exist = file_1._exist;
        this.create = file_1._create;
        this.read = file_1._read;
        this.readJSON = file_1._readJSON;
        this.type = file_1._type;
        this.resizeImgBuffer = file_1._resizeImgBuffer;
    }
    return FilesToolKit;
}());
exports.FilesToolKit = FilesToolKit;
