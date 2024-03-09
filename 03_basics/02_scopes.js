
// var c =300// its present in global scope
let a=300
if(true){ // whatever we write in the curly parenthesis here is limited to block scope only 
    let a=10
    const b = 20
    // console.log("Inner block scope value:" ,a);
}

// console.log("outer global scope value :",a) //it will show an undefined error
// console.log(b) it will also show an undefined error
// console.log(c)



// let array=[1,2,3,4]
// for (let i = 0; i < array.length; i++) {
//     console.log( array [i]);
    
// }

function one (){
    const username="purvesh"

    function two(){ //chota baccha ane bade se icecream le sakta hai i.e a child function can access the variables and objects of parent function
        const website = "github"
        console.log(username)
    }
    // console.log(website)// but a parent cannot access the variables and objects of child function

    two()

}

// one()

if(true){
    const username="puma"
    if(username==="puma"){
        const website =" github"
        console.log(username+website);
    }
    // console.log(website)// out of scope
}
// console.log(username);// out of scope 

//+++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++

// two ways to declare function
console.log(addone(5))
function addone(num) {
    return num+1
    
}


// addtwo(5) we cannot access here the addtwo function bcuz in above function we are just declaring it but in the below function we have also assgined a variable to it
const addtwo =function(num){
    return num+2

}

console.log(addtwo(5));