
console.log("task started");
 const task1 = ()=>{
    return new Promise(( resolve, reject) => {
        setTimeout( ()=> {
            console.log("task1 completed");
        resolve();
        },5000)
        // setTimeout(() => {
        //     console.log("task 11 completed");
        //     resolve();
        // }, 3000);
    });
 }


 const task2 = ()=>{
    return new Promise((resolve ,reject) =>{
        setTimeout(()=>{
            console.log("Task2 completed");
        resolve();
        },1000)
    });
 }

 

   const calltask = async ()=>{
    const t1=  await task1();
    const t2 = await task2();
    // console.log(t2);
    // console.log(t1);
    console.log("Task End");
 }
calltask();



