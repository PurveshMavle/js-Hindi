/*
JavaScript is a dynamically typed language. This means that the data type of a variable is determined at runtime based on the value assigned to it. There are no strict declarations for variable types, and variables can hold different types of data throughout the program
*/
// how the data is stored in memory and how the data is accessed in memory on this basis the categerization is done
//# Primitve datatype they are all called by values i.e whenever they are passed to a function thier original copy of memory is not given but a copy is passed on and the changes that are made are done on copy  
// symbol : kisi bhi value ko unqiue bana ne ke liye use hota hai
// 7 types :String, Number,Boolean,null,Undefined,Symbol,BigInt

const score =100//number
const scorevalue=0.3//number

const isLoggedin =false 

const Temp=null

let useremail;//undefined

const id =Symbol('123')
const anotherid=Symbol('123')

// console.log(id==anotherid);// false 

const Bignumber = 111212121464646464n// bigInt




// #Non Primitive Datatype or referenced data type direct memory reference is allocated whenever they are used
//objects,browser events

// types: Array,Objects,Functions

const heros = ["shaktiman", "nagraj","doga"];
let Myobj = {
    name:"purvesh",
    age:18,
}

 const MyFunction = function(){
 console.log("hello world");
}


console.log(typeof Bignumber)
console.log(typeof Temp)
console.log(typeof MyFunction) //function object 


/*
 **Here are examples of JavaScript datatypes, along with their `typeof` output:**

**Primitive Datatypes:**

- **String:** Represents text data.
   - Example: `let name = "Alice";`
   - `typeof name;` // Output: `"string"`

- **Number:** Represents numerical values.
   - Example: `let age = 30;`
   - `typeof age;` // Output: `"number"`

- **Boolean:** Represents logical values, either `true` or `false`.
   - Example: `let isLoggedIn = true;`
   - `typeof isLoggedIn;` // Output: `"boolean"`

- **null:** Represents the intentional absence of a value.
   - Example: `let middleName = null;`
   - `typeof middleName;` // Output: `"null"`

- **undefined:** Represents a variable that has been declared but not assigned a value.
   - Example: `let unknownValue;`
   - `typeof unknownValue;` // Output: `"undefined"`

- **Symbol:** Creates unique, immutable identifiers.
   - Example: `let mySymbol = Symbol("uniqueKey");`
   - `typeof mySymbol;` // Output: `"symbol"`

- **BigInt:** Represents arbitrarily large integers (introduced in ES2020).
   - Example: `let bigNumber = 9007199254740991n;` (note the "n" suffix)
   - `typeof bigNumber;` // Output: `"bigint"`


**Non-Primitive Datatypes:**

- **Array:** An ordered collection of values.
   - Example: `let numbers = [1, 2, 3];`
   - `typeof numbers;` // Output: `"object"` (but it's specifically an Array)

- **Object:** A collection of key-value pairs.
   - Example: `let person = { name: "Bob", age: 25 };`
   - `typeof person;` // Output: `"object"`

- **Function:** A block of code that can be executed.
   - Example: `function greet(name) { console.log("Hello, " + name); }`
   - `typeof greet;` // Output: `"function"`


*/

//-------------------------------------------------------------------------------------------//

// Stack(mainly used in all primitive types) Heap(used in non primitive types)

let myName='Purvesh mavle'

let anothername= myName

anothername='chai';
console.log(myName);
console.log(anothername);

let userone ={
    email:'user@gmood.com',
    upi:'chaiaurcode'
}

let usertwo = userone

usertwo.email='puma@google.cmo'
console.log(userone.email);
console.log(usertwo.email);