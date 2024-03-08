//arrays

const myarray = [0,1,2,3,4,5,true,"purvesh"]
const myheros = ["shaktiman","ironman","Purvesh"]
const myarray2 = new Array(1,2,3,4)
console.log(myarray[7]);
console.log(myheros[1]);

//array methods

// myarray.push(6)
// myarray.push("Ironman")
// myarray.pop()

// myarray.unshift(9)
// myarray.shift()

// console.log(myarray.includes(9));
// console.log(myarray.indexOf(9));//it will show -1 if value not present
// console.log(myarray.indexOf(2));//it will show -1 if value not present

// const newArr=myarray.join()
// console.log(myarray);
// console.log(typeof myarray);
// console.log(newArr);
// console.log(typeof newArr);


//slice,  //splice

console.log("A",myarray);
const myn1 =myarray.slice(1,4)
const myn2 =myarray.slice(-8,8)
console.log(myn1);
console.log(myn2);

const myn3 =myarray.splice(1,3)
const myn4 =myarray.slice(-8)
const myn5 =myarray.splice(1)
console.log(myn3);
console.log(myn4);

/*
Slice

Purpose: Creates a new array containing a portion of the original array.
Modification: Does not modify the original array.
Arguments: Takes two optional arguments:
start (default: 0): The index at which to begin extraction (inclusive).
end (default: end of array): The index at which to end extraction (exclusive).
Return value: A new array containing the extracted portion.

const fruits = ["apple", "banana", "orange", "mango"];
const slicedFruits = fruits.slice(1, 3); // Extract banana and orange
console.log(slicedFruits); // Output: ["banana", "orange"]
console.log(fruits);        // Output: ["apple", "banana", "orange", "mango"] (original array remains unchanged)
*/



/*

Splice

Purpose: Modifies the original array by extracting a section, inserting elements, or removing elements.
Modification: Modifies the original array directly.
Arguments: Takes multiple optional arguments:
start (required): The index at which to start modifying the array.
deleteCount (default: 0): The number of elements to remove from the original array.
element1, element2, ... (optional): Elements to insert into the array at the specified index.
Return value: An array containing the removed elements (if any).

const colors = ["red", "green", "blue", "purple"];
const removedColors = colors.splice(1, 2, "yellow"); // Remove green and blue, insert yellow
console.log(removedColors); // Output: ["green", "blue"]
console.log(colors);          // Output: ["red", "yellow", "purple"] (original array is modified)
*/

