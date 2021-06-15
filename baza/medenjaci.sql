CREATE TABLE Korisnik
(
	korime               CHAR(18) NOT NULL,
	lozinka              CHAR(18) NULL,
	ime                  CHAR(18) NULL,
	prezime              CHAR(18) NULL,
	telefon              CHAR(18) NULL,
	adresa               CHAR(18) NULL,
	privilegovani        CHAR(18) NULL
);

ALTER TABLE Korisnik
ADD CONSTRAINT XPKKorisnik PRIMARY KEY (korime);

CREATE TABLE Naruceno
(
	idproizvod           CHAR(18) NOT NULL,
	idporudzbina         CHAR(18) NOT NULL,
	kolicina             CHAR(18) NULL
);

ALTER TABLE Naruceno
ADD CONSTRAINT XPKNaruceno PRIMARY KEY (idproizvod,idporudzbina);

CREATE TABLE Porudzbina
(
	idporudzbina         CHAR(18) NOT NULL,
	status               CHAR(18) NULL,
	dostava              CHAR(18) NULL,
	cena                 CHAR(18) NULL
);

ALTER TABLE Porudzbina
ADD CONSTRAINT XPKPorudzbina PRIMARY KEY (idporudzbina);

CREATE TABLE Proizvod
(
	idproizvod           CHAR(18) NOT NULL,
	slika                CHAR(18) NULL,
	naziv                CHAR(18) NULL,
	cena                 CHAR(18) NULL,
	opis                 CHAR(18) NULL,
	koriscenje           CHAR(18) NULL,
	dostupnaKolicina     CHAR(18) NULL
);

ALTER TABLE Proizvod
ADD CONSTRAINT XPKProizvod PRIMARY KEY (idproizvod);

ALTER TABLE Naruceno
ADD CONSTRAINT R_1 FOREIGN KEY (idproizvod) REFERENCES Proizvod (idproizvod);

ALTER TABLE Naruceno
ADD CONSTRAINT R_2 FOREIGN KEY (idporudzbina) REFERENCES Porudzbina (idporudzbina);
