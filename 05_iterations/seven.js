let myNumbers =[1,2,3,4,5,6,7,8,9,10]

// myNumbers = myNumbers.map((num )=> num+10)

const newnum= myNumbers.map((num)=>num*10).map((num)=>num +1).filter((num)=> num>=40) // this method is called chaining
console.log(newnum)