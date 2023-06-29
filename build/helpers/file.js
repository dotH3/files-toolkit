"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var File = /** @class */ (function () {
    function File() {
        this.exist = exist;
        this.create = create;
        this.read = read;
        this.readJSON = readJSON;
        this.type = type;
    }
    return File;
}());
exports.File = File;
var exist = function (path) {
    if (fs_1.default.existsSync(path))
        return true;
    return false;
};
var create = function (path, data) {
    if (type(path) != 'file')
        throw new Error("path:\"".concat(path, "\" is not a file path"));
    // if (isFileOrDirectory(path) != 'file') throw new Error(`path:"${path}" is not a file path`)
    fs_1.default.mkdirSync((0, path_1.dirname)(path), { recursive: true });
    fs_1.default.writeFileSync(path, "".concat(data));
};
var read = function (path, raw) {
    if (type(path) != 'file')
        throw new Error("path:".concat(path, " is not a file"));
    if (!exist(path))
        throw new Error("file:".concat(path, " not exist"));
    var data = fs_1.default.readFileSync(path);
    return (raw ? data : data.toString('utf8'));
};
var readJSON = function (path) {
    if (type(path) != 'file')
        throw new Error("path:".concat(path, " is not a file"));
    if (!exist(path))
        throw new Error("file:".concat(path, " not exist"));
    var data = fs_1.default.readFileSync(path);
    data = data.toString('utf8');
    return (JSON.parse(data));
};
var type = function (path) {
    path = (0, path_1.basename)(path);
    var extension = (0, path_1.extname)(path);
    if (!extension)
        return 'directory';
    return 'file';
};
