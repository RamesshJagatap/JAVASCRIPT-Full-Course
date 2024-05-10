
console.log("Execution Started");
function fetchUser(){
    return new Promise( ()=>{
        const User= [
            {id:1,name:Ramesh},
            {id:2,name:Rajesh},
            {id:3,name:Rakesh}]
    },3000)
}
async function called(){
    const fetch = await fetchUser();
    console.log(fetch);
    console.log("Execution End");
}