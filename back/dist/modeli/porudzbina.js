"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let porudzbina = new Schema({
    idporudzbina: {
        type: Number
    },
    status: {
        type: Number
    },
    dostava: {
        type: Number
    },
    cena: {
        type: Number
    },
});
exports.default = mongoose_1.default.model('porudzbina', porudzbina, 'porudzbinas');
//# sourceMappingURL=porudzbina.js.map