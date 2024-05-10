const person = {
    Name:"Ramesh",
    Age:24,
    Country:"India",
    greet:function(){
        console.log("Hello my name is "+ " " + this.Name);
    }
}
// person.Name="ganesh";
console.log(" typeof person is "+ typeof person);
console.log(person);
console.log(person.greet());