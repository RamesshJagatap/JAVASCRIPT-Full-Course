
x();
function x(){
    console.log(5);
}

//example1

console.log(y);
var y = 10;   //undefined

//temporal dead zone
//for let const
let z;
// const b;
console.log(z);
console.log(b);
z=20;
b=30;