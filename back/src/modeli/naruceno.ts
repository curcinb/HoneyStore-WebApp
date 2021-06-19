import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let naruceno = new Schema({
    idProizvod : {
        type : Number
    },
    idPorudzbina : {
        type : Number
    },
    kolicina : {
        type : Number
    },
    ukupnaCena : {
        type : Number
    }
});

export default mongoose.model('naruceno', naruceno, 'narucenos');