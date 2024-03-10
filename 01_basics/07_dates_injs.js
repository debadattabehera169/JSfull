let myDate = new Date()       //object created of date
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toDateString());
console.log(typeof(myDate));       //its an object

//let mycreatedDate = new Date(2023, 0, 23);  //year month date hour min sec    here month starts from 0
let mycreatedDate = new Date("03-10-24");
console.log(mycreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());       //values are in mili seconds
console.log(Math.floor(Date.now()/1000)); //default in mili second to convert into sec div by 1000 and floor reduce the decimal val

let newDate =new Date()
console.log(newDate.getMonth() +1);     //add 1,as month starts from 0

newDate.toLocaleString('default', {
    weekday: "long"
})