"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let AlbumSlika = new Schema({
    ID: {
        type: Number
    },
    IDAlbum: {
        type: Number
    },
    SlikaNaziv: {
        type: String
    },
    SlikaSacuvano: {
        type: String
    },
    OpisSlike: {
        type: String
    }
});
exports.default = mongoose_1.default.model('albumslika', AlbumSlika, 'albumslikas');
//# sourceMappingURL=AlbumSlika.js.map