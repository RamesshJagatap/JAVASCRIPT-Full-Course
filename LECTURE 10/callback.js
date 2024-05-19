
// Example 0
function greet(name,callback){
    console.log("Hello"+ " " + name);
    callback();
}
function goodbye(){
    console.log("How r you");
}
greet("ramesh",goodbye)

// Example 1
const person= {
    name:"ramesh",
    age:33,
    add:"india"
}
console.log(person);
person.name="ganesh";
console.log(person);


//Example 2
const greet1 = (name , callback) => {                 //callback = hru()
    console.log("Hello " + name);
    callback();
}
const hru = () =>{
    console.log("How are you ?" );
}
greet1("Ramesh",hru);


//Example 3
const fullname = (fname, a, b) => {                             //a=course() and b=city()
    console.log("Hello my name is " + fname);
    a("JavaScript");                                     // pass agrument here for callback 
    b("Pune");
}

const course = (position) => {
    console.log("I'm learning " + position);
}

const city = (loc) => {
    console.log("I'm from " + loc);
}
fullname("Ramesh", course, city);                   //we can't pass argument here for course and city