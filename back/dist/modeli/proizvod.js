"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let proizvod = new Schema({
    idproizvod: {
        type: Number
    },
    slika: {
        type: String
    },
    naziv: {
        type: String
    },
    cena: {
        type: Number
    },
    opis: {
        type: String
    },
    koriscenje: {
        type: String
    },
    dostupnaKolicina: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('proizvod', proizvod, 'proizvods');
//# sourceMappingURL=proizvod.js.map