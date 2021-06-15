"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let korisnik = new Schema({
    korime: {
        type: String
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    telefon: {
        type: String
    },
    adresa: {
        type: String
    },
    grad: {
        type: String
    },
    privilegovani: {
        type: Number
    },
});
exports.default = mongoose_1.default.model('korisnik', korisnik, 'korisniks');
//# sourceMappingURL=korisnik.js.map