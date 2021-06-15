import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let naruceno = new Schema({
    idproizvod : {
        type : Number
    },
    idporudzbina : {
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