"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Link = new Schema({
    IDLink: {
        type: Number
    },
    URL: {
        type: String
    },
    SlikaNaziv: {
        type: String
    },
    SlikaSacuvano: {
        type: String
    },
    Naslov: {
        type: String
    }
});
exports.default = mongoose_1.default.model('link', Link, 'links');
//# sourceMappingURL=Link.js.map