class Segitiga{
    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }

    luas(){
        return this.alas*this.tinggi/2;
    }

    cetakPropert(){
        console.log(`alas\t:${this.alas}`);
        console.log(`tingi\t:${this.tinggi}`);
    }
}

class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        super(a,t);//memanggil konstruktor kelas segitiga
        //mendefinisikan properti baru
        this.warna=w;
    }

    cetakPropert(){
        //memanggil segitiga.cetakPropert
        super.cetakPropert();
        console.log(`warna\t:${this.warna}`);
    }
}
//membaca data alas dan tinggi
let a = 50;
console.log("Nilai a :" +a);
let t = 80;
console.log("Nilai t :" +t);
//membuat objek dari kelas segitigawarna
let obj=new SegitigaWarna(a,t,'biru');
obj.cetakPropert;

//memanggil metode luas
console.log(`luas\t:${obj.luas()}`);