class Aritmatika{
    static tambah(a,b){
        return a+b;
    }
}
//membaca data a dan b
let a = 66;
console.log("Nilai a :" +a);
let b = 99;
console.log("Nilai b :" +b);
//memanggil metode statis
console.log(`${a}+${b}=${Aritmatika.tambah(a,b)}`);