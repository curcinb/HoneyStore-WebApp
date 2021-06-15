import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let korisnik = new Schema({
    korime : {
        type : String
    },
    lozinka : {
        type: String
    },
    ime : {
        type : String
    },
    prezime : {
        type : String
    },
    telefon : {
        type : String
    },
    adresa : {
        type : String
    },
    grad : {
        type : String
    },
    privilegovani : {
        type : Number
    },
});

export default mongoose.model('korisnik', korisnik, 'korisniks');