//singleton object
const tinderUser =new Object()
tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn =false
console.log(tinderUser);    //empty object

const regularuser ={                    //nested object
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Debadatta",
            lastname: "Behera"
        }
    }
}

//console.log(regularuser.fullname.userfullname);

const obj1 ={1: 'a',2: 'b'}
const obj2 ={3: 'c',4: 'd'}
const obj3 ={obj1, obj2}
//console.log(obj3);

const  obj4=Object.assign(obj1, obj2)
//const  obj4=Object.assign({}, obj1, obj2)     o/p will be sm but its a standard to follow
//console.log(obj4);

const obj5 ={...obj1, ...obj2}      //spread synta
//console.log(obj5);

const users = [         //array of objects
    {
        id:1,
        email:"fdg@grg"
    },
    {
        fnaem:"dev",
        lname:"gf"
    }
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));   //returns all the key in array format
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));        //key value pair of array inside array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));