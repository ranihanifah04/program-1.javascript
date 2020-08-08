//kelas ekspesi
class DivisionByZeroError extends Error{
    constructor(msg){
        super(msg);
        this.name=this.constructor.name;
        this.message=msg;
    }
}

let a = 33;
console.log("Nilai a :" +a);
let b = 2;
console.log("Nilai b :" +b);

try{
    if(b==0){
        throw new DivisionByZeroError(
            'Nilai B Tidak Bole 0'
        );
    }
    let c=a/bconsole.log(`${a}/${b}=${c}`);
}catch(e){
 console.log(e.getMessage);
}