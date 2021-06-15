"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let ClanakSlika = new Schema({
    ID: {
        type: Number
    },
    IDClanak: {
        type: Number
    },
    SlikaNaziv: {
        type: String
    },
    SlikaSacuvano: {
        type: String
    },
});
exports.default = mongoose_1.default.model('clanakslika', ClanakSlika, 'clanakslikas');
//# sourceMappingURL=ClanakSlika.js.map