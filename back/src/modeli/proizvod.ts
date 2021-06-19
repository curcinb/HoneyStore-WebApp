import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let proizvod = new Schema({
    idProizvod : {
        type : Number
    },
    slika : {
        type : String
    },
    naziv : {
        type : String
    },
    cena : {
        type : Number
    },
    opis : {
        type : String
    },
    koriscenje : {
        type : String
    },
    dostupnaKolicina : {
        type : Number
    }
});

export default mongoose.model('proizvod', proizvod, 'proizvods');