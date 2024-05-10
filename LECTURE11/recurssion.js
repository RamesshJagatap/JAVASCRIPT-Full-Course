
//Recurssion
// function call iteself to solve the problem

function factorial(n){
    if(n==1) || (n==0) {
        return 1;
    }
    else{
        retrun n* factorial(n-1)
    }
}
console.log(factorial(5));