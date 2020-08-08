function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c=Math.sqrt(kuadrat(a)+kuadrat(b));

}

console.log("Menghitung Sisi Miring Segitiga Siku-Siku");
let a = 15;
console.log("Masukkan nilai a:" +a);
let b = 16;
console.log("Masukkan nilai b:" +b);
var c=hipotenusa(a,b);

console.log(`Sisi Miring = ${c}`);