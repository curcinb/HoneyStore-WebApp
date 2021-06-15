"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Clanak = new Schema({
    IDClanak: {
        type: Number
    },
    Naslov: {
        type: String
    },
    KratakOpis: {
        type: String
    },
    Opis: {
        type: String
    },
    Datum: {
        type: Date
    },
    Autor: {
        type: String
    },
    NaslovnaSlikaNaziv: {
        type: String
    },
    NaslovnaSlikaSacuvano: {
        type: String
    },
});
exports.default = mongoose_1.default.model('clanak', Clanak, 'clanaks');
//# sourceMappingURL=Clanak.js.map