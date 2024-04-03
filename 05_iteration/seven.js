const  myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.map((item)=>item+10)
//console.log(newNums);

//chaining method
const newNums = myNums
.map((num)=>num*10)
.map((num)=>num+1)      //in case of it return every things
.filter((num)=>num>=40)     //it retruns ony the true part
console.log(newNums);