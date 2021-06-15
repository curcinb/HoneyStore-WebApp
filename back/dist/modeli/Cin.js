"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Cin = new Schema({
    IDCin: {
        type: Number
    },
    Cin: {
        type: String
    }
});
exports.default = mongoose_1.default.model('cin', Cin, 'cins');
//# sourceMappingURL=Cin.js.map