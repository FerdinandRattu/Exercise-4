let hello;
hello = "welcome";

let age = 34;
age += 2;

let namaDepan = "Dinand";
let namaBelakang = "Rattu";

let namaLengkap = namaDepan + " " + namaBelakang + ", Usia saya adalah " + age;

let apakahSudahMenikah = true;

let alamat;

console.log(hello);
console.log(age);
console.log(apakahSudahMenikah);
console.log(alamat);
console.log(namaBelakang);

console.log(10 == '10'); //loose equality
console.log(10 === '10'); //strict equality

let angka = 10;
let hasil = angka % 2 === 0 || false ? "Genap" : "Ganjil";
console.log(hasil);


//Single Line Comment
/*
    Multiple Line comment
    Multiple Line comment
    Multiple Line comment
*/

//function

//function declaration
const salam = ucapkanSalam("Selamat sore ini function declaration");
console.log(salam);

function ucapkanSalam(salam){
    return salam;
}

//function expression
const ucapkanSalam2 = function (){
    return "Selamat sore ini function expression";
}

console.log(ucapkanSalam2());