function PB(a,b){
    var c=a/b;
    return (c>=0)? Math.floor(c): Math.cell(c);
}
var a = 10;
console.log("Nilai a: " +a);
var b = 8;
console.log("Nilai b: " +b);

console.log(`${a}/${b}=${PB(a,b)}`);