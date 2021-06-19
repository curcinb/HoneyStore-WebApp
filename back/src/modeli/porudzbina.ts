import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let porudzbina = new Schema({
    idPorudzbina : {
        type : Number
    },
    status : {
        type : Number
    },
    dostava : {
        type : Number
    },
    cena : {
        type : Number
    },
    imeKupca : {
        type : String
    },
    prezimeKupca : {
        type : String
    },
    adresaKupca : {
        type : String
    },
    gradKupca : {
        type : String
    },
    telefonKupca : {
        type : String
    }
});

export default mongoose.model('porudzbina', porudzbina, 'porudzbinas');