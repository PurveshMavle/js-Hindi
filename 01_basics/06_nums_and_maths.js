const score = 400
// console.log(score);
const balance = new Number(50000)
// console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anothernumber = 123.845966

// console.log(anothernumber.toPrecision(4));

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));

//-----------------------------MATHS-----------------------//

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(4,5,4,2,1,0));
console.log(Math.max(4,5,4,2,1,0));
console.log(Math.random());// random function will always give values between 0-1 by default
console.log(Math.floor(Math.random()*10) + 1);// random function will always give values between 0-1

const min = 10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) //