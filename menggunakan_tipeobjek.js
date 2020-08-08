class Segitiga{

    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }
    //daftar metode
    luas(){
        return this.alas*this.tinggi/2;

    }
    //metode statis
    static buatObjek(a,t){
        return new Segitiga(a,t);
    }
}

var a = 20;
console.log("Nilai a:"+a);
var t = 10;
console.log("Nilai b:"+t);

let obj=Segitiga.buatObjek(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);

