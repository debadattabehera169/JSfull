//for loop

for (let index = 0; index < 10; index++) {
    const element =index;
    if(element ==5){
        //console.log("5 is best number");
    }
    //console.log(index);
}

for (let i = 1; i <=10; i++) {
    const element = i;
    //console.log(`Outer loop value:${i}`);
    for (let j = 1; j <=10; j++) {
        const element = j;
       //console.log(`Inner loop value: ${j} and inner loop number ${i}`);
       // console.log(`${i} *  ${j} = ${i*j}`);
        
    }
}
let myarray =["flash","batman","superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);
}

//keywords in loop (break and continue)

for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${i}`);  
}

for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);  
}