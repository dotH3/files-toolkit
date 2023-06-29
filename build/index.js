"use strict";
//   console.log((Buffer.byteLength(buffer) / (1024 * 1024)).toFixed(2)+' MB');
Object.defineProperty(exports, "__esModule", { value: true });
exports.fun = exports.FileManager = void 0;
var file_1 = require("./modules/file");
var FileManager = /** @class */ (function () {
    function FileManager() {
        this.exist = file_1._exist;
        this.create = file_1._create;
        this.read = file_1._read;
        this.readJSON = file_1._readJSON;
        this.type = file_1._type;
        this.resizeImgBuffer = file_1._resizeImgBuffer;
    }
    return FileManager;
}());
exports.FileManager = FileManager;
var fun = function (msg) {
    return msg;
};
exports.fun = fun;
