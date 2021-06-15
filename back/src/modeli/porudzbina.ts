import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let porudzbina = new Schema({
    idporudzbina : {
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
});

export default mongoose.model('porudzbina', porudzbina, 'porudzbinas');