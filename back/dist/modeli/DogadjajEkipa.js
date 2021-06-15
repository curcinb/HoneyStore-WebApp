"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let DogadjajEkipa = new Schema({
    ID: {
        type: Number
    },
    IDDogadjaj: {
        type: Number
    },
    Korime: {
        type: String
    },
    Ime: {
        type: String
    },
    Prezime: {
        type: String
    }
});
exports.default = mongoose_1.default.model('dogadjajekipa', DogadjajEkipa, 'dogadjajekipas');
//# sourceMappingURL=DogadjajEkipa.js.map