function saymyname(){
    console.log("p")
    console.log("u")
    console.log("r")
    console.log("v")
    console.log("e")
    console.log("s")
    console.log("H")

}

// saymyname() without parenthesis it is function refernce and to execute we have to add brackets

function addtwonumber(number1,number2){
//    let result=number1+number2
//     console.log(number1+number2);
//     return result
return number1+number2

}

const result = addtwonumber(3,5)
console.log("result", result);

function loginusermessage (username="sam"){
    if(!username)// its meaning is if the entered input is undefined so it will make it true with not operator and the if statment loop will be exceuted
    {
        console.log("plz enter a username");
           return
    }
    return `${username} just logged in `
}
// console.log(loginusermessage("Purvesh"))
// console.log(loginusermessage())

function calculatecartprice(val1,val2,...num1){
    return num1
}

const user ={
    username :"hitesh",
    price:199
}

console.log(calculatecartprice(200,400,800,2000))//(... )here it is called as rest operator also called as spread operator

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleobject(user)
// handleobject({
//     username:"sam",
//     price:399
// })

const mynewarray=[200,400,100,600]

function returnsecondvalue(getarray){
    return getarray[1]
}


console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,400,600]));