// const TinderUser = new Object()
const TinderUser={}
//1st and 2 nd line both are used for creating object but the difference is the first line is singleton object and second is non singleon object

TinderUser.id ="123abc"
TinderUser.name ="Puma"
TinderUser.isloggedin=false

// console.log(TinderUser)

const regularuser ={
    email:"some@gmail.com",
    fullname :{
      userfullname:{
        firstname:"Purvesh",
        lastname:"mavle"
      }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"e",6:"f"}

// const obj3=Object.assign({},obj1,obj2,obj4)//{} act as a target and all values are copied in it and rest all act as a source

const obj3={...obj1,...obj2,...obj4}//object spread operator
// console.log(obj3);

const users =[
  {
    id:1,
    email:"h@gmail.com"
  },
  {
    id:1,
    email:"h@gmail.com"
  },
  {
    id:1,
    email:"h@gmail.com"
  },
]

users[1].email
console.log(TinderUser);


// console.log(Object.keys(TinderUser))
// console.log(typeof (Object.keys(TinderUser)))
// console.log((Object.values(TinderUser)))
// console.log((Object.entries(TinderUser)))

// console.log((TinderUser.hasOwnProperty('isloggedin')))
// console.log((TinderUser.hasOwnProperty('islogged')))


//destructuring can be done on arrays also and objects also

const course = {
  coursename :"js in hindi",
  price:"999",
  insturctor:"Purvesh"
}

// course.insturctor standard method

const {insturctor:inst}=course//object destructuring syntax
console.log(inst)
// jab apna kaam kisi aur pe daal de toh use api hai
/* JSON syntax in json the key and value both are in string 
{
  "name":"purvesh",
  "coursename":"jsservices",
  "price":"free"
}
[
  {},
  {},
  {}
]
*/

