function hitung(A,b,callback){
    return callback(a,b);
}

let a = 20;
console.log("Masukkan nilai a = " +a);
let b = 7;
console.log("Masukkan nilai b = " +b);

console.log(`${a}+${b}=`+hitung(a,b,function(){return a+b;}));
console.log(`${a}-${b}=`+hitung(a,b,function(){return a-b;}));
console.log(`${a}*${b}=`+hitung(a,b,function(){return a*b;}));
console.log(`${a}/${b}=`+hitung(a,b,function(){return a/b;}));