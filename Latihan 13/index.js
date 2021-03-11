//OOP in Javascript
//Object Literal
//const mobil1 = {
  //  merek : "Toyota",
    //warna : "putih",
    //nyalakanMobil : function() {
    //    console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    //},
//};

//const mobil2 = {
 //   merek : "Honda",
 //   warna : "merah",
   // nyalakanMobil : function() {
     //   console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    //},
//};

//mobil1.nyalakanMobil();
//mobil2.nyalakanMobil();

//object class

class Mobil {
    constructor(merek, warna){
        this.merek = merek;
        this.warna = warna;
    }

    nyalakanMobil(){
        console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`)
    }
}

//const mobil1 = new Mobil("Toyota", "Putih");
//const mobil2 = new Mobil("Honda", "Merah");
//mobil1.nyalakanMobil();
//mobil2.nyalakanMobil();

//inheritance
class Toyota extends Mobil{
    constructor(merek, warna, mesin){
        super(merek, warna);
        this.mesin = mesin;
    }
    nyalakanMobil(){
        console.log(`Mobil dengan merek ${this.merek} dengan mesin ${this.mesin} sudah dinyalakan`)
    }
    matikanMesin (){
        console.log(`Mobil dengan merek ${this.merek} telah dimatikan`)
    }
}
const agya = new Toyota('Agya', "Putih", "1000cc");
const avanza = new Toyota("Avanza", "Hitam", "1300cc");

agya.nyalakanMobil();
avanza.nyalakanMobil();
agya.matikanMesin();
