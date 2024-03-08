const name ='pu-ma '
const repocount = 50
// console.log(name + repocount + " Value" ); outdated

console.log(`Hello, my name is ${name} and I am ${repocount} years old.`);

const gameName= new String('pU-ma-is-great');

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString =gameName.substring(0,2)
console.log(newString);

const anotherstring = gameName.slice(-4)

console.log(anotherstring);

const string1= "     Puma     "
console.log(string1);
console.log(string1.trim());

const url="https://Puma.com/purveshMavle%20great"


console.log(url.replace('%20',' '));

console.log(url.includes('Puma'));

    console.log(gameName.split('-'));