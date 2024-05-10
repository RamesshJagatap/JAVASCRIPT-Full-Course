//self invoke Function


console.log("What's Your age?");
(function () {
    var x= 10;
    console.log("My age is :" + x);
})()

(function (){
    var y = 30;
    console.log(y);
})()