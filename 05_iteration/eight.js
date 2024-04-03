//reduce function
const myNums =[1,2,3]
// const myTotal= myNums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and curval ${curval}`);
//     return acc + curval                 //first give accumulator,current value then whats to return and at the end write initail value
// },0)

const myTotal = myNums.reduce((acc,curval)=>acc+curval,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "Data scientist",
        price: 12999
    },
    {
        itemName : "python course",
        price: 1999
    }
]

const priceTopay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceTopay);