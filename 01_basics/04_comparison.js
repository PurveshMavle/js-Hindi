// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null >0)
// console.log(null <0)

// console.log(null==0)
// console.log(null >=0)
// console.log(null <=0)
// console.log(null !=0)

/* 
the reason is that and equality check == and comparisons > < >= <= works differently.
comparisons convert null to a number , treating it as 0.
that's why null >=0 is true and null>0 is false
 */
// console.log(undefined ==0);
// console.log(undefined >=0);
// console.log(undefined >0);
// console.log(undefined <=0);
// console.log(undefined <0);

// always gives false o/p

//in js comparisons and equality check == works differently

// strict check  "===" it not only checks the values but also checks the datatype

console.log("2" == 2);
console.log("2" === 2);