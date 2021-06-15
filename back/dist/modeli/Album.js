"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Album = new Schema({
    IDAlbum: {
        type: Number
    },
    Naslov: {
        type: String
    },
    Datum: {
        type: Date
    },
    Mesto: {
        type: String
    },
    Opis: {
        type: String
    },
    NaslovnaSlikaNaziv: {
        type: String
    },
    NaslovnaSlikaSacuvano: {
        type: String
    },
});
exports.default = mongoose_1.default.model('album', Album, 'albums');
//# sourceMappingURL=Album.js.map