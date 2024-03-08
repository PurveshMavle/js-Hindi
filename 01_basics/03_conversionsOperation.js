let score = true

console.log(typeof(score));

let valueInNumber = Number(score) // to convert string score in number we use keyword "Number(pass the parameter)"
// console.log( typeof valueInNumber);
// console.log(valueInNumber);// when is mix 33 with abc  so it gave output as NaN i.e not a number  since abc cant be converted to number 
//when we put null then its value is coverted to zero in number 
//when true is put in score its value in Number is 1

//"33"=>33
//"33abc"=>NaN
//true=>1; false =>0
//1=> true ; 0=>false
//""=>false
//"purvesh"=>true
let isLoggedIn = ""

let booleanisloggedIn = Boolean(isLoggedIn)
console.log(booleanisloggedIn);

let someNumber =33
let stringNumber =String(someNumber)

console.log(stringNumber)
console.log( typeof stringNumber)