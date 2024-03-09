const user={
    username: "purvesh",
    price:999,
    welcomemessage : function(){
           console.log(`${this.username} welcome to website `)
           console.log(this);//this will give us the current context of the object user   i.e all info
    }
}


// user.welcomemessage()
// user.username="sam"

// user.welcomemessage()
console.log(this);// it will give us an empty string since there is no global objects present or declared
// but when the same command is run on browser we will get window object and its attribut which signifies that "window is the global object in browser"

// function chai(){
//     let username="sahil"
//     console.log(this);
//     console.log(this.username);// here it will not work since it works only in context of an objectt so the output will be undefined
// }
// chai()

// const chai = function () {
//     let username="sahil"
//      console.log(this);
//      console.log(this.username);// here also the output will be undefined
// }
// chai()


// () => {} arrow function syntax
// const chai =() => {
//     let username="sahil"
//      console.log(this);
//      console.log(this.username);// here also the output will be undefined
// }
// chai()

//basic arrow function  or even called explicitly return
// const addTwo1 = (num1,num2)=>{
//   return num1+num2;
// }

//arrow function with implicit return
// const addTwo2 = (num1,num2)=>(num1+num2)//implcitly return the value since only one statement present 

const addTwo2 = (num1,num2)=>({username:"Purvesh"})
console.log(addTwo2(3,4));
