class Covek
{
    constructor(ime,prezime)
    {
        this.ime = ime;
        this.prezime = prezime;
    }
}

class Doktor extends Covek
{
    constructor(ime, prezime, specijalnost)
    {
        super(ime, prezime);
        this.specijalnost = specijalnost;
        this.nizPacijenata = [];
        this.brojPacijenta = 0;
        Loger.logujKreiranjeDoktora(this);
    }
    
    zakaziPregled(pregled)
    {
        this.pregled = pregled;
        console.log("zakazan je pregled");
    }
    
}

class Pacijent extends Covek
{
    constructor(ime, prezime, jmbg, brojZdrKar)
    {
        super(ime, prezime);
        this.jmbg = jmbg;
        this.brojZdrKar = brojZdrKar;
        Loger.logujKreiranjePacijenta(this)
    }

    izborDoktora(doktor)
    {
        this.doktor = doktor;
        doktor.nizPacijenata[doktor.brojPacijenta] = this;
        doktor.brojPacijenta ++;
        Loger.logujPacijentBiraDoktora(this,this.doktor);
    }
}

class Pregled  
{
    constructor(datum,vreme,pacijent)
    {
		this.datum = datum;
		this.vreme = vreme;
		this.pacijent = pacijent;
    }
}	


class PregledKrvnogPritiska extends Pregled 
{
    constructor(datum,vreme,pacijent,tip,gornjaVrednost, donjaVrednost, puls)
    {
        super(datum,vreme,pacijent);
        this.tip='krvni pritisak';
		this.gornjaVrednost = gornjaVrednost;
		this.donjaVrednost = donjaVrednost;
        this.puls = puls;
    }

	radiPregled()
    {
        console.log("Pregled krvnog pritiska za pacijenta " + this.pacijent.ime + " " + this.pacijent.prezime + " ");

        this.gornjaVrednost = Math.floor((Math.random() * 130) + 110);
        this.donjaVrednost = Math.floor((Math.random() * 90) + 70);
        this.puls = Math.floor((Math.random() * 70) + 50);

        console.log("Rezultati pregleda: pritisak je "+ this.gornjaVrednost +" sa "+ this.donjaVrednost + ", a puls je "+ this.puls + " ");

        Loger.logujObavljanjePregleda(this,);
    }
}

class PregledSecera extends Pregled
{

	constructor(datum,vreme,pacijent,tip,vrednost, vremePoslednjegObroka){
        super(datum,vreme,pacijent);
        this.tip = tip;
		this.vrednost = vrednost;
		this.vremePoslednjegObroka = vremePoslednjegObroka;
	}

    radiPregled()
    {
       console.log("Pregled nivoa secera za pacijenta "+ this.pacijent.ime +" "+ this.pacijent.prezime +" ");   

       this.vrednost =  Math.floor((Math.random() * 60) + 40);
       this.vremePoslednjegObroka = prompt("unesite vereme poslednjeg pbroka");

       console.log("Rezultati pregleda: secer je "+ this.vrednost + ", a vreme poslednjeg obroka je "+ this.vremePoslednjegObroka + " ");

       Loger.logujObavljanjePregleda(this);
	}
}

class PregledHolesterola extends Pregled
{
    constructor(datum,vreme, pacijent, tip, vrednost, vremePoslednjegObroka)
    {
        super(datum,vreme,pacijent);
        this.tip = tip;
		this.vrednost = vrednost;
		this.vremePoslednjegObroka = vremePoslednjegObroka;
    }
    
    radiPregled()
    {
        console.log("Pregled holesterola u krvi za pacijenta "+ this.pacijent.ime +" "+ this.pacijent.prezime +": ");   

        this.vrednost = (Math.random() * 7) + 4;
        this.vremePoslednjegObroka = prompt("unesite vereme poslednjeg pbroka");

        console.log("Rezultati pregleda: holesterol je "+ this.vrednost + ", a vreme poslednjeg obroka je "+ this.vremePoslednjegObroka + " ");

        Loger.logujObavljanjePregleda(this);
	}
}

class Loger 
{
    static logujKreiranjeDoktora(doktor)
    {
       console.log("["+ new Date().getFullYear() + "."+new Date().getMonth() + "."+ new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +"]" + "kreiran je doktor " + doktor.ime + " " + doktor.prezime + " "); 
	}

	static logujKreiranjePacijenta(pacijent)
    {
       console.log("["+ new Date().getFullYear() + "."+new Date().getMonth() + "."+ new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +"]" + "kreiran je pacijent " + pacijent.ime + " " + pacijent.prezime + " "); 
    }
    
    static logujPacijentBiraDoktora(pacijent, doktor)
    {
       console.log("["+ new Date().getFullYear() + "."+new Date().getMonth() + "."+ new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +"]" + " pacijent " + pacijent.ime + " " + pacijent.prezime + " je izabrao doktora "+ doktor.ime + " " + doktor.prezime+" "); 
    }
    
	static logujObavljanjePregleda(pregled)
    {
       console.log("["+ new Date().getFullYear() + "."+new Date().getMonth() + "."+ new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +"]" + " obavljen je pregled" + pregled.tip + " "); 
	}
}

var mengele = new Doktor ("Branko","Brankovic","hirurg");
var pacer = new Pacijent ("Mica","Micovic","0708989777036","007");
pacer.izborDoktora(mengele);

var pregled1 = new PregledSecera('12-12-2017', '08:00', pacer);

mengele.zakaziPregled(pregled1);
pregled1.radiPregled();

var pregled2 = new PregledKrvnogPritiska('12-12-2017', '08:15', pacer);
pregled2.radiPregled();