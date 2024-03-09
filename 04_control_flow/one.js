//if 

// if(true){//scope


// }
const temperature =41


if(temperature!=41){//scope
console.log("less than 50")

}
else{
    console.log("temperature is greater than 50");

}

console.log("exceuted");

const isuserLoggedIn=true
// if(isuserLoggedIn){//scope

// < ,>,<=,>=,==,!=,===,!==
// }

const score = 200 
if(score>100){
    const power="fly"
    console.log(`user power ${power}`)
}

const balance =1000
// if (balance> 500) (console.log("test")),console.log("test2"); not to write code in this manner not a good practice

// if(balance < 500)
// {
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance < 950){
//     console.log("less than 950");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn=true
const debitcard= true
const loggedInFromGoggle=true
const loggedInFromEmail=true

if(userLoggedIn && debitcard && 2==2)
{
    console.log("allow to buy courses");
}
if(loggedInFromEmail || loggedInFromGoggle ){
    console.log("Logged from email or google");
}

