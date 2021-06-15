"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let ODrustvu = new Schema({
    ID: {
        type: Number
    },
    Naslov: {
        type: String
    },
    Tekst: {
        type: String
    },
    SlikaNaziv: {
        type: String
    },
    SlikaSacuvano: {
        type: String
    },
});
exports.default = mongoose_1.default.model('odrustvu', ODrustvu, 'odrustvus');
//# sourceMappingURL=ODrustvu.js.map