const mynum=[1,2,3]


// const  mytotal=mynum.reduce((accumulator,current_value)=> {
//    console.log(`accumulator :${accumulator} and current_value :${current_value}`);
//     return accumulator +current_value;
// },0/*initial value*/)
const mytotal =mynum.reduce((accumulator,current_value)=>accumulator+current_value,0)

console.log(mytotal);
const shoppingcart=[
    {
        itemname:"jscourse",
        price:2999
    },
    {
        itemname:"pycourse",
        price:999
    },
    {
        itemname:"cppcourse",
        price:299
    }
]

const pricetopay=shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(pricetopay);