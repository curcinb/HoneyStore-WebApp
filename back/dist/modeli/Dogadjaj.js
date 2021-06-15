"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Dogadjaj = new Schema({
    IDDogadjaj: {
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
    Tip: {
        type: String
    },
    Godina: {
        type: Number
    },
    SlikaNaziv: {
        type: String
    },
    SlikaSacuvano: {
        type: String
    },
    Autor: {
        type: String
    }
});
exports.default = mongoose_1.default.model('dogadjaj', Dogadjaj, 'dogadjajs');
//# sourceMappingURL=Dogadjaj.js.map