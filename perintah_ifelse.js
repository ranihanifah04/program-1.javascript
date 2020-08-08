var x = 20;
console.log("Nilai a:"+x);
var y = 10;
console.log("Nilai b:"+x);
var z;

if (y===0){
    console.log('Kesalahan : Nilai y tidak boleh nol');
    //Process.exit(1);
} else{

z=x/y;
console.log(`${x}/${y}=${z}`);
}
