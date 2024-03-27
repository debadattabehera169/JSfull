function sysMyName(){
    console.log("dev");
}
//sysMyName()
// function addTwoNumber(num1, num2){
//    console.log( num1 + num2 )
// }

function addTwoNumber(num1,num2){
    // let result= num1 +num2
    // return result;

    return num1 +num2;
}
// const result = addTwoNumber(5,3);
// console.log(result)


function loginUserMessage(username= "sam"){
    if(username === undefined){
        console.log("please enter a valid username");
        return;
    }
    return `${username} just logged in`
   
}

//console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){   //... rest operator
    return num1
}
console.log(calculateCartPrice(2, 200, 300, 400))

const user ={
    username: "Dev",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400, 500, 600, 700]));