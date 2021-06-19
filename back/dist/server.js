"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './fajlovi' });
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "root",
    database: "medenjaci"
});
db.connect((err) => {
    if (err)
        throw err;
    console.log("mysql connected");
});
const router = express_1.default.Router();
router.route('/login').post((req, res) => {
    let korime = req.body.korime;
    let lozinka = req.body.lozinka;
    let sql = `SELECT * FROM korisnik WHERE korime= '${korime}' AND lozinka ='${lozinka}'`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/dohvatiProizvode').post((req, res) => {
    let sql = `SELECT * FROM proizvod WHERE dostupnaKolicina>0 ORDER BY idProizvod DESC`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/dohvatiProizvod').post((req, res) => {
    let id = req.body.idProizvod;
    let sql = `SELECT * FROM proizvod WHERE idProizvod='${id}'`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/dodavanjeNovogProizvoda').post((req, res) => {
    let noviProizvod = req.body.noviProizvod;
    let naziv = noviProizvod.naziv;
    let slika = noviProizvod.slika;
    let cena = noviProizvod.cena;
    let opis = noviProizvod.opis;
    let koriscenje = noviProizvod.koriscenje;
    let kolicina = noviProizvod.dostupnaKolicina;
    let sql = `INSERT INTO proizvod (naziv, slika, cena, opis, koriscenje, dostupnaKolicina)
        VALUES('${naziv}', '${slika}', '${cena}', '${opis}', '${koriscenje}', '${kolicina}')`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/dohvatiSveProizvodePorudzbine').post((req, res) => {
    let id = req.body.idPorudzbina;
    let sql = `SELECT * FROM naruceno WHERE idPorudzbina="${id}"`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/izmenaKorisnika').post((req, res) => {
    let korisnik = req.body.korisnikPromena;
    let korime = korisnik.korime;
    let telefon = korisnik.telefon;
    let adresa = korisnik.adresa;
    let grad = korisnik.grad;
    let lozinka = korisnik.lozinka;
    let sql = `UPDATE korisnik SET telefon='${telefon}', adresa='${adresa}', grad='${grad}', lozinka='${lozinka}' WHERE korime='${korime}'`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/kreirajPorudzbinu').post((req, res) => {
    let ukupnaCena = req.body.ukupnaCena;
    let kupac = req.body.kupac;
    let ime = kupac.ime;
    let prezime = kupac.prezime;
    let adresa = kupac.adresa;
    let grad = kupac.grad;
    let telefon = kupac.telefon;
    let sql = `INSERT INTO porudzbina (cena, imeKupca, prezimeKupca, adresaKupca, gradKupca, telefonKupca)
         VALUES ('${ukupnaCena}', '${ime}', '${prezime}', '${adresa}', '${grad}', '${telefon}')`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/dohvatiIdPoslednjePorudzbine').post((req, res) => {
    let sql = `select idPorudzbina from porudzbina ORDER BY idPorudzbina DESC limit 1`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/dohvatiSvePorudzbine').post((req, res) => {
    let sql = `SELECT * FROM porudzbina`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
        res.json(result);
    });
});
router.route('/dodajStavkeNaPorudzbinu').post((req, res) => {
    let proizvodiKorpa = req.body.proizvodiKorpa;
    let idPorudzbine = req.body.idPorudzbine;
    for (let i = 0; i < proizvodiKorpa.length; i++) {
        let idProizvod = proizvodiKorpa[i].idProizvod;
        let kolicina = proizvodiKorpa[i].porucenaKolicina;
        let ukupnaCena = proizvodiKorpa[i].cena * proizvodiKorpa[i].porucenaKolicina;
        let sql = `INSERT INTO naruceno (idPorudzbina, idProizvod, kolicina, ukupnaCena)
             VALUES ('${idPorudzbine}', '${idProizvod}', '${kolicina}', '${ukupnaCena}')`;
        db.query(sql, (err, result) => {
            if (err)
                throw err;
        });
    }
    ;
});
router.route('/prihvatiPorudzbinu').post((req, res) => {
    let status = req.body.status;
    let brojDana = req.body.brojDana;
    let idPorudzbina = req.body.idPorudzbina;
    let sql = `UPDATE porudzbina SET status='${status}', dostava='${brojDana}' WHERE idPorudzbina='${idPorudzbina}'`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
    });
});
router.route('/odbijPorudzbinu').post((req, res) => {
    let status = req.body.status;
    let idPorudzbina = req.body.idPorudzbina;
    let sql = `UPDATE porudzbina SET status='${status}' WHERE idPorudzbina='${idPorudzbina}'`;
    db.query(sql, (err, result) => {
        if (err)
            throw err;
    });
});
app.get('/', (req, res) => res.send('Radi!'));
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map