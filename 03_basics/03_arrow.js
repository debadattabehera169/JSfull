const user ={
    username :"dev",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this);
    }
}
user.welcomeMessage()
user.username = 'd'
user.welcomeMessage()

//console.log(this)

//-------------------------------------------------
// function chai(){
//     let username = "dev"
//     console.log(this.username);     //undefined
//     //console.log(this);
// }
// chai()

// const chai = function(){
//     let username ="dev"
//     console.log(this.username);     //also shows undefined
// }
// chai()

// const chai = ()=>{          //arrow function
//     let username ="dev"
//     console.log(this.username);     //undefined
// }
// chai()

// const addtwo =(num1,num2) =>{
//     return num1+num2
// }

//const addtwo =(num1,num2) => num1+num2           //called implicit return we dont have to write return 
//const addtwo =(num1,num2) =>(num1+num2)         //if we write in parenthesis dont need to write return keyword

//const addtwo =(num1,num2)=>({username:"dev"})     //during returning object we nned to wrap that in parenthesis
console.log(addtwo(3,4));
