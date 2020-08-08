
function tambah(a,b){
    return a+b;
}
function kurang(a,b){
    return a-b;
}
function kali(a,b){
    return a*b;
}
function bagi(a,b){
    return a/b;
}
function hitung(a,b,callback){
    return callback(a,b);
}

let a=7;
console.log("Masukkan nilai a:" +a);
let b=4;
console.log("masukkan nilai b:" +b);

console.log(`${2}+${4}= ${hitung(2,4,tambah)}`);
console.log(`${2}-${4}= ${hitung(2,4,kurang)}`);
console.log(`${2}*${4}= ${hitung(2,4,kali)}`);
console.log(`${2}/${4}= ${hitung(2,4,bagi)}`);

