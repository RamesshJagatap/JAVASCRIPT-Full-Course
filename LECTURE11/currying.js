// passing one arg for one function

function f1(x){
    return function f2(y){
        return function f3(z){
            return x + y + z;
        }
    }
}
console.log(f1(10));
const first = f1(10);
console.log(first);       //return the f2()function

const second = first(10);  //return the f3()
const third = second(10);  
console.log(third);