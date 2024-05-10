

// Ability to remember the var of the outer funciton
function outer(){

    var outervar= "I am Outer Variable"
    function inner(){
        console.log(outervar);
    }
    return inner;
}
 var closureFUn = outer();
 closureFUn();