let a = 10;
console.log("Nilai a:"+a);
let b = 6;
console.log("Nilai b:"+b);
let c;

if(b===0){
    console.log('5');
    process.exit(1);
}

c=a/b;
console.log(`${a}/${b}=${c}`);