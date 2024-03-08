//singleton.A singleton class enforces the creation of a single instance and provides a global access point to it.
//This can be useful for managing global state or ensuring only one object of a specific type exists. 

//singleton is not form from literals
//singleton is only formed from constructor

//ways to create object 

//object constructor
//Object.create here singleton is formed

//object literals singleton not formed
const mySym =Symbol("key1")
const mySym1 =Symbol("key2")

const Jsuser={
    name:"purvesh",
    "full name":"purvesh mavle",
    [mySym]:"mykey1",
    age:22,
    location: "Jaipur",
    email: "purvesh@goggle.com",
    isLoggedIn:false,
    lastloggedIn:["monday","Saturday"]
}
console.log(Jsuser.name)

// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym]);
// console.log((Jsuser[mySym]));

Jsuser.email="Puma@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email="Puma@microsoft.com"
// console.log(Jsuser)

const arr ="welcome Jsuser";
Jsuser.greeting = function(){
    console.log(arr);
}
Jsuser.greeting2 = function(){
    console.log(`hello Jsuser ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());




