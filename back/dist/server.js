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
    let sql = `SELECT * FROM proizvod WHERE dostupnaKolicina>0`;
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
/*
//Metode za korisnika:
router.route('/login').post(
    (req, res) => {
        let Korime = req.body.Korime;
        let Lozinka = req.body.Lozinka;

        let sql = `SELECT * FROM privilegovani WHERE Korime= '${Korime}' AND Lozinka ='${Lozinka}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
);

router.route('/dohvatiKorisnika').post(
    (req, res) => {
        let Korime = req.body.Korime;
        let Lozinka = req.body.Lozinka;

        let sql = `SELECT * FROM korisnik WHERE Korime= '${Korime}' AND Lozinka ='${Lozinka}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
);

router.route('/dohvatiSveKorisnike').post(
    (req, res) => {

        let sql = `SELECT * FROM korisnik`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiSveClanoveZaTakmicenja').post(
    (req, res) => {

        let sql = `SELECT * FROM dogadjajekipa`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiVatrogasca').post(
    (req, res) => {

        let korime = req.body.korime;
        let sql = `SELECT * FROM korisnik WHERE Korime='${korime}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiSveVatrogasce').post(
    (req, res) => {

        let sql = `SELECT * FROM korisnik WHERE IDFunkcija=3 OR IDFunkcija=4 OR IDFunkcija=5`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajKorisnika').post(
    (req, res) => {
        let noviKorisnik = req.body.noviKorisnik;
        let ime = noviKorisnik.Ime;
        let prezime = noviKorisnik.Prezime;
        let korime = noviKorisnik.Korime;
        let lozinka = noviKorisnik.Lozinka;
        let datum = noviKorisnik.DatumRodjenja;
        if (datum == null) datum = new Date().toISOString();
        let jmbg = noviKorisnik.JMBG;
        let strucnaSprema = noviKorisnik.StrucnaSprema;
        let vozacka = noviKorisnik.VozackaDozvola;
        let krvnaGrupa = noviKorisnik.KrvnaGrupa;
        let adresa = noviKorisnik.Adresa;
        let bracnoStanje = noviKorisnik.BracnoStanje;
        let fiksni = noviKorisnik.TelefonFiksni;
        let mobilni = noviKorisnik.TelefonMobilni;
        let mejl = noviKorisnik.Mejl;
        let funkcija = noviKorisnik.IDFunkcija;
        let pozicija = noviKorisnik.IDPozicija;
        let cin = noviKorisnik.IDCin;
        let vojska = noviKorisnik.SluzioVojsku;
        let specijalnost = noviKorisnik.Specijalnost;
        let vojniCin = noviKorisnik.VojniCin;
        let aktivnosti = noviKorisnik.DosadasnjeAktivnosti;
        let komentar = noviKorisnik.Komentar;
        let sekretar = noviKorisnik.Sekretar;

        let sql = `INSERT INTO korisnik (Ime, Prezime, Korime, Lozinka, Sekretar,
            DatumRodjenja, JMBG, StrucnaSprema, VozackaDozvola, KrvnaGrupa, Adresa,
            BracnoStanje, TelefonFiksni, TelefonMobilni, Mejl, SluzioVojsku,
            Specijalnost, VojniCin, DosadasnjeAktivnosti, Komentar, IDCin, IDPozicija, IDFunkcija)
            VALUES('${ime}', '${prezime}', '${korime}', '${lozinka}', '${sekretar}',
            '${datum}', '${jmbg}', '${strucnaSprema}', '${vozacka}',
            '${krvnaGrupa}', '${adresa}', '${bracnoStanje}', '${fiksni}', '${mobilni}',
            '${mejl}', '${vojska}', '${specijalnost}', '${vojniCin}', '${aktivnosti}',
            '${komentar}', '${cin}', '${pozicija}', '${funkcija}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajPrivilegovanog').post(
    (req, res) => {
        let Korime = req.body.korime;
        let Lozinka = req.body.lozinka;
        let sql;

        sql = `INSERT INTO privilegovani (Korime, Lozinka) VALUES('${Korime}','${Lozinka}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/promenaLozinkePrivilegovani').post(
    (req, res) => {
        let Korime = req.body.Korime;
        let Lozinka = req.body.Lozinka;
        let sql;

        sql = `UPDATE privilegovani SET Lozinka ='${Lozinka}' WHERE Korime= '${Korime}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/promenaLozinkeKorisnik').post(
    (req, res) => {
        let Korime = req.body.Korime;
        let Lozinka = req.body.Lozinka;

        let sql;

        sql = `UPDATE korisnik SET Lozinka ='${Lozinka}' WHERE Korime= '${Korime}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/korisnikPromena').post(
    (req, res) => {
        let korisnikPromena = req.body.korisnikPromena;
        let IDKorisnik = korisnikPromena.IDKorisnik;
        let JMBG = korisnikPromena.JMBG;
        let DatumRodjenja = korisnikPromena.DatumRodjenja;
        let StrucnaSprema = korisnikPromena.StrucnaSprema;
        let VozackaDozvola = korisnikPromena.VozackaDozvola;
        let KrvnaGrupa = korisnikPromena.KrvnaGrupa;
        let BracnoStanje = korisnikPromena.BracnoStanje;
        let Cin = korisnikPromena.IDCin;
        let Pozicija = korisnikPromena.IDPozicija;
        let VojniCin = korisnikPromena.VojniCin;
        let Specijalnost = korisnikPromena.Specijalnost;
        let Mejl = korisnikPromena.Mejl;
        let TelefonMobilni = korisnikPromena.TelefonMobilni;
        let TelefonFiksni = korisnikPromena.TelefonFiksni;
        let Adresa = korisnikPromena.Adresa;

        let sql = `UPDATE korisnik
        SET JMBG='${JMBG}', StrucnaSprema='${StrucnaSprema}',
        VozackaDozvola='${VozackaDozvola}', KrvnaGrupa='${KrvnaGrupa}', BracnoStanje='${BracnoStanje}',
        IDCin='${Cin}', IDPozicija='${Pozicija}', VojniCin='${VojniCin}', Specijalnost='${Specijalnost}',
        Mejl='${Mejl}', TelefonMobilni='${TelefonMobilni}', TelefonFiksni='${TelefonFiksni}', Adresa='${Adresa}'
        WHERE IDKorisnik ='${IDKorisnik}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/obrisiKorisnika').post(
    (req, res) => {

        let id = req.body.id;

        let sql = `DELETE FROM korisnik WHERE IDKorisnik='${id}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/obrisiPrivilegovanog').post(
    (req, res) => {

        let korime = req.body.korime;

        let sql = `DELETE FROM privilegovani WHERE Korime='${korime}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Medote za cinove:
router.route('/dohvatiSveCinove').post(
    (req, res) => {

        let sql = `SELECT * FROM cin`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiCin').post(
    (req, res) => {
        let IDCin = req.body.IDCin;

        let sql = `SELECT Cin FROM cin WHERE IDCin='${IDCin}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNoviCin').post(
    (req, res) => {
        let opisCina = req.body.cin;

        let sql = `INSERT INTO cin (Cin) VALUES ('${opisCina}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/izmeniCin').post(
    (req, res) => {
        let IDCin = req.body.IDCin;
        let Cin = req.body.Cin;

        let sql = `UPDATE cin SET Cin='${Cin}' WHERE IDCin='${IDCin}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metode za funkcije:
router.route('/dohvatiSveFunkcije').post(
    (req, res) => {

        let sql = `SELECT * FROM funkcija`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiFunkciju').post(
    (req, res) => {
        let IDFunkcija = req.body.IDFunkcija;

        let sql = `SELECT * FROM funkcija WHERE IDFunkcija='${IDFunkcija}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/izmeniFunkciju').post(
    (req, res) => {
        let IDFunkcija = req.body.IDFunkcija;
        let Funkcija = req.body.Funkcija;

        let sql = `UPDATE funkcija SET Funkcija='${Funkcija}' WHERE IDFunkcija='${IDFunkcija}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNovuFunkciju').post(
    (req, res) => {
        let opisFunkcije = req.body.funkcija;

        let sql = `INSERT INTO funkcija (Funkcija) VALUES ('${opisFunkcije}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metode za poziciju:
router.route('/dohvatiSvePozicije').post(
    (req, res) => {

        let sql = `SELECT * FROM pozicija`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiPoziciju').post(
    (req, res) => {
        let IDPozicija = req.body.IDPozicija;

        let sql = `SELECT Pozicija FROM pozicija WHERE IDPozicija ='${IDPozicija}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metode za vesti:
router.route('/dohvatiVesti').post(
    (req, res) => {
        let sql = `SELECT * FROM vest ORDER BY IDVest DESC LIMIT 0,5;`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiVestiArhiva').post(
    (req, res) => {
        let sql = `SELECT * FROM vest ORDER BY IDVest DESC LIMIT 5,999;`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNovuVest').post(
    (req, res) => {

        let Naslov = req.body.Naslov;
        let Opis = req.body.Opis;
        let Datum = new Date().toISOString();
        let Autor = req.body.Autor;
        let Link;
        let sql;
        if (req.body.Link != undefined) {
            Link = req.body.Link;
            sql = `INSERT INTO vest (Naslov, Opis, Datum, Autor, Link) VALUES ('${Naslov}', '${Opis}', '${Datum}', '${Autor}', '${Link}')`;
        }
        else {
            sql = `INSERT INTO vest (Naslov, Opis, Datum, Autor) VALUES ('${Naslov}', '${Opis}', '${Datum}', '${Autor}')`;
        }

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/izmeniVest').post(
    (req, res) => {

        let IDVest = req.body.vest.IDVest;
        let naslov = req.body.vest.Naslov;
        let opis = req.body.vest.Opis;
        let link = req.body.vest.Link;
        let datum = new Date().toISOString();

        let sql = `UPDATE vest SET Naslov='${naslov}', Opis='${opis}', Link='${link}', Datum='${datum}' WHERE IDVest='${IDVest}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/obrisiVest').post(
    (req, res) => {

        let IDVest = req.body.IDVest;

        let sql = `DELETE FROM vest WHERE IDVest='${IDVest}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metode za albume:

//    Fix za datum!
//    SET SESSION sql_mode = 'NO_ENGINE_SUBSTITUTION';
//    SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';

router.route('/dohvatiAlbume').post(
    (req, res) => {
        let sql = `SELECT * FROM album ORDER BY IDAlbum DESC`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiSlikeUAlbumu').post(
    (req, res) => {
        let IDAlbum = req.body.IDAlbum;

        let sql = `SELECT * FROM albumslike WHERE IDAlbum='${IDAlbum}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNoviAlbum').post(
    (req, res) => {
        let album = req.body.noviAlbum;
        let Datum = new Date().toISOString();

        let sql = `INSERT INTO album (Naslov, Datum, Mesto, Opis) VALUES ('${album.Naslov}', '${Datum}', '${album.Mesto}', '${album.Opis}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNovuSliku').post(
    (req, res) => {
        let slika = req.body.novaSlika;

        let sql = `INSERT INTO albumslike (IDAlbum, OpisSlike) VALUES ('${slika.IDAlbum}', '${slika.OpisSlike}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)


app.post('/uploadPhotoAlbum', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let opis = req.body.opis;

    let sql = `UPDATE albumslike SET SlikaSacuvano='${ime}', SlikaNaziv='${orig}' WHERE OpisSlike='${opis}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

app.post('/uploadPhotoGalerija', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let naslov = req.body.naslov;

    let sql = `UPDATE album SET NaslovnaSlikaSacuvano='${ime}', NaslovnaSlikaNaziv='${orig}' WHERE Naslov='${naslov}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

router.route('/obrisiAlbum').post(
    (req, res) => {
        let id = req.body.id;

        let sql = `DELETE FROM album WHERE IDAlbum='${id}';`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metode za linkove:
router.route('/dohvatiSveLinkove').post(
    (req, res) => {

        let sql = `SELECT * FROM link`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNoviLink').post(
    (req, res) => {

        let Naslov = req.body.noviLink.Naslov;
        let URL = req.body.noviLink.URL;

        let sql = `INSERT INTO link (Naslov, URL) VALUES('${Naslov}','${URL}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/izmeniLink').post(
    (req, res) => {

        let idLink = req.body.idLink;
        let naslov = req.body.naslov;
        let url = req.body.url;

        let sql = `UPDATE link SET Naslov='${naslov}', URL='${url}' WHERE IDLink='${idLink}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

app.post('/uploadPhotoLink', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let naslov = req.body.naslov;

    let sql = `UPDATE link SET SlikaSacuvano='${ime}', SlikaNaziv='${orig}' WHERE Naslov='${naslov}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

router.route('/obrisiLink').post(
    (req, res) => {

        let idLink = req.body.idLink;

        let sql = `DELETE FROM link where IDLink='${idLink}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metode za informacije o drustvu:
router.route('/dohvatiInformacije').post(
    (req, res) => {

        let sql = `SELECT * FROM odrustvu`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/izmeniParagraf').post(
    (req, res) => {

        let tekst = req.body.tekst;
        let ID = req.body.id;
        let sql = `UPDATE odrustvu SET Tekst='${tekst}' WHERE ID='${ID}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

app.post('/uploadPhotoDrustvo', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let tekst = req.body.tekst;

    let sql = `UPDATE odrustvu SET SlikaSacuvano='${ime}', SlikaNaziv='${orig}' WHERE Tekst='${tekst}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

//Metode za dogadjaje:
router.route('/dohvatiSveDogadjaje').post(
    (req, res) => {

        let sql = `SELECT * FROM dogadjaj ORDER BY IDDogadjaj DESC`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiSvaTakmicenja').post(
    (req, res) => {

        let tip = 'takmicenje';
        let sql = `SELECT * FROM dogadjaj WHERE Tip='${tip}' ORDER BY Datum DESC`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNoviDogadjaj').post(
    (req, res) => {

        let Naslov = req.body.noviDogadjaj.Naslov;
        let Datum = new Date().toISOString();
        let Mesto = req.body.noviDogadjaj.Mesto;
        let Opis = req.body.noviDogadjaj.Opis;
        let Tip = req.body.noviDogadjaj.Tip;
        let Autor = req.body.autor;

        let sql;

        sql = `INSERT INTO dogadjaj (Naslov, Datum, Mesto, Opis, Tip, Autor)
        VALUES ('${Naslov}', '${Datum}', '${Mesto}', '${Opis}', '${Tip}','${Autor}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNovoTakmicenje').post(
    (req, res) => {

        let Naslov = req.body.novoTakmicenje.Naslov;
        let Mesto = req.body.novoTakmicenje.Mesto;
        let Opis = req.body.novoTakmicenje.Opis;
        let Tip = req.body.novoTakmicenje.Tip;
        let Autor = req.body.autor;
        let Godina = req.body.novoTakmicenje.Godina;
        let Datum = new Date();
        Datum.setFullYear(Godina);
        let DatumPravi = Datum.toISOString();

        let sql;

        sql = `INSERT INTO dogadjaj (Naslov, Datum, Mesto, Opis, Tip, Autor, Godina)
        VALUES ('${Naslov}', '${DatumPravi}', '${Mesto}', '${Opis}', '${Tip}','${Autor}', '${Godina}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajVatrogasca').post(
    (req, res) => {

        let id = req.body.idDogadjaj;
        let korime = req.body.korime;

        let sql = `INSERT INTO dogadjajekipa (IDDogadjaj, Korime) VALUES('${id}','${korime}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiIDPoslednjegTakmicenja').post(
    (req, res) => {

        let sql = `SELECT IDDogadjaj FROM dogadjaj ORDER BY IDDogadjaj DESC LIMIT 1`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/izmeniDogadjaj').post(
    (req, res) => {

        let ID = req.body.ID;
        let Naslov = req.body.Naslov;
        let Mesto = req.body.Mesto;
        let Opis = req.body.Opis;
        let Autor = req.body.Autor;
        let Datum = new Date().toISOString();

        let sql;

        sql = `UPDATE dogadjaj SET Naslov='${Naslov}', Mesto='${Mesto}', Opis='${Opis}',
        Autor='${Autor}', Datum='${Datum}' WHERE IDDogadjaj='${ID}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/izmeniTakmicenje').post(
    (req, res) => {

        let ID = req.body.ID;
        let Naslov = req.body.Naslov;
        let Mesto = req.body.Mesto;
        let Opis = req.body.Opis;
        let Autor = req.body.Autor;
        //let Datum = new Date().toISOString();

        let sql;

        sql = `UPDATE dogadjaj SET Naslov='${Naslov}', Mesto='${Mesto}', Opis='${Opis}',
        Autor='${Autor}' WHERE IDDogadjaj='${ID}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/obrisiDogadjaj').post(
    (req, res) => {

        let idDogadjaj = req.body.idDogadjaj;
        let sql = `DELETE FROM dogadjaj WHERE IDDogadjaj='${idDogadjaj}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/obrisiVatrogasce').post(
    (req, res) => {

        let idDogadjaj = req.body.idDogadjaj;
        let sql = `DELETE FROM dogadjajekipa WHERE IDDogadjaj='${idDogadjaj}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metode za clanke:
router.route('/dohvatiSveClanke').post(
    (req, res) => {

        let sql = `SELECT * FROM clanak ORDER BY IDClanak DESC`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dohvatiSlikeZaClanak').post(
    (req, res) => {

        let IDClanak = req.body.idClanak;
        let sql = `SELECT * FROM clanakslike WHERE IDClanak='${IDClanak}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNoviClanak').post(
    (req, res) => {

        let Autor = req.body.noviClanak.Autor;
        let Naslov = req.body.noviClanak.Naslov;
        let KratakOpis = req.body.noviClanak.KratakOpis;;
        let Datum = new Date().toISOString();

        let sql = `INSERT INTO clanak (Naslov, KratakOpis,Datum, Autor)
         VALUES ('${Naslov}', '${KratakOpis}', '${Datum}', '${Autor}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNovuSlikuClanak').post(
    (req, res) => {
        let slika = req.body.novaSlika;

        let sql = `INSERT INTO clanakslike (IDClanak, OpisSlike) VALUES ('${slika.IDClanak}', '${slika.OpisSlike}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/izmeniClanak').post(
    (req, res) => {

        let idClanak = req.body.idClanak;
        let naslov = req.body.naslov;
        let opis = req.body.opis;
        let autor = req.body.autor;
        let datum = new Date().toISOString();

        let sql = `UPDATE clanak SET Naslov='${naslov}', Opis='${opis}', Autor='${autor}', Datum='${datum}'
        WHERE IDClanak='${idClanak}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

app.post('/uploadPhotoClanak', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let kratakOpis = req.body.kratakOpis;

    let sql = `UPDATE clanak SET NaslovnaSlikaSacuvano='${ime}', NaslovnaSlikaNaziv='${orig}' WHERE KratakOpis='${kratakOpis}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

app.post('/uploadPhotoClanakStranica', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let SlikaOpis = req.body.opis;

    let sql = `UPDATE clanakslike SET SlikaSacuvano='${ime}', SlikaNaziv='${orig}' WHERE OpisSlike='${SlikaOpis}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

router.route('/obrisiClanak').post(
    (req, res) => {

        let idClanak = req.body.idClanak;
        let sql = `DELETE FROM clanak WHERE IDClanak='${idClanak}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metode za banere:
router.route('/dohvatiBanere').post(
    (req, res) => {

        let idPozcija = req.body.sekcijaSajta;
        let sql = `SELECT * FROM baner WHERE IDPozicija='${idPozcija}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

router.route('/dodajNoviBaner').post(
    (req, res) => {

        let Link = req.body.noviBaner.Link;
        let IDPozicija = req.body.IDPozicija;

        let sql = `INSERT INTO baner (Link, IDPozicija) VALUES('${Link}', '${IDPozicija}')`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

app.post('/uploadPhotoBaner', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let link = req.body.link;

    let sql = `UPDATE baner SET SlikaSacuvano='${ime}', SlikaNaziv='${orig}' WHERE Link='${link}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

app.post('/uploadPhotoKorisnik', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let korime = req.body.korime;

    let sql = `UPDATE korisnik SET ProfilnaSlikaSacuvano='${ime}', ProfilnaSlikaNaziv='${orig}' WHERE Korime='${korime}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

app.post('/uploadPhotoDogadjaj', multipartMiddleware, (req, res) => {
    var myfiles = JSON.stringify(req.files);
    let poz1 = myfiles.indexOf('fajlovi\\');
    let ime = myfiles.substr(poz1 + 9, 28);

    let poz2 = myfiles.indexOf('originalFilename');

    let origIme = myfiles.substring(poz2 + 19);
    let poz3 = origIme.indexOf(',');
    let orig = origIme.substring(0, poz3 - 1);

    let opis = req.body.opis;

    let sql = `UPDATE dogadjaj SET SlikaSacuvano='${ime}', SlikaNaziv='${orig}' WHERE Opis='${opis}'`;

    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.json(result);
    })
});

router.route('/obrisiBaner').post(
    (req, res) => {

        let idBaner = req.body.idBaner;
        let sql = `DELETE FROM baner WHERE IDBaner='${idBaner}'`;

        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.json(result);
        })
    }
)

//Metoda za dohvatanje slika sa servera:
router.route('/download').get((req, res) => {
    let putanja = '../fajlovi/' + req.query.fajl;
    res.download(path.join(__dirname, putanja), req.query.ime, function (err) {
        //console.log(err);
    });
})

*/
app.get('/', (req, res) => res.send('Radi!'));
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map