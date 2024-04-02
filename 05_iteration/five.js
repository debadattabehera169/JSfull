 const  coding = ["js","ruby","java","python","cpp"]

//  coding.forEach(function (val) {                 //calback function
//     console.log(val);
//  })

//arrow funciton

// coding.forEach( (item) =>{              //arrow function as calback function
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)         //we can add the refference of other function

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const mycoding = [                      //array of object
    {
        langName : "javascript",
        langFileName: "js"
    },
    {
        langName : "java",
        langFileName: "java"
    },
    {
        langName : "python",
        langFileName: "py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.langName);
})