"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Vest = new Schema({
    IDVest: {
        type: Number
    },
    Naslov: {
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
    Link: {
        type: String
    }
});
exports.default = mongoose_1.default.model('vest', Vest, 'vests');
//# sourceMappingURL=Vest.js.map