const arrow1 = () => {
    console.log("First arrow fun");
}
arrow1();

const arrow2 = (name) => {
    console.log("Hello "+ name);
}
arrow2("Ramesh");

const arrow3 = (name , sirname) => {
    console.log("Hello "+ name + " "+ sirname);
}
arrow3("ramesh","jagtap");

const arrow4 = (a,b) =>{
    return (a + b);
}
const add = arrow4(20,30);
console.log(add);

// For single return statemenet 

const arrow6 = (a,b) =>(a-b)
const sub = (40,20);
console.log(sub);

