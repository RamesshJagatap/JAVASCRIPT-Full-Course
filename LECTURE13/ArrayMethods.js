var tech = [ 0,"One",2,3,"Four",5,6,7,8]
console.log(tech);
tech.push(9);
console.log(tech);
tech.pop();
console.log(tech);
tech.shift();
console.log(tech);
tech.unshift(0);
console.log(tech);
tech.sort();                   //not possible for number
console.log(tech);
 tech.splice(3,3,1,2,3);
 ted
console.log(tech);
 a = tech.slice(0,3);
console.log(a);

var fruits = [ "Mango","Banana","Apple","Santra"];
 console.log(fruits.fill("Guava",0,3));
 console.log(fruits.fill("Mango"));

 var age = [ 2, 4, 29, 49,40,60];
 function FindAge(age){
    return age > 18;
 }
console.log(age.find(FindAge));

var str = "My name is Ramesh";
console.log(str.substring(10,30));