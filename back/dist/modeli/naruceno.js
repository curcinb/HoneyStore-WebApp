"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let naruceno = new Schema({
    idProizvod: {
        type: Number
    },
    idPorudzbina: {
        type: Number
    },
    kolicina: {
        type: Number
    },
    ukupnaCena: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('naruceno', naruceno, 'narucenos');
//# sourceMappingURL=naruceno.js.map