const marvel = ["thor","ironman","spiderman","odin"]
const dc = ["flash","superman","archer","luffy"]

// marvel.push(dc)// it will create an array inside an array i.e it will treat an array dc as object and it will insert it in marvel array
// console.log(marvel);
// console.log(marvel[4]);
// console.log(marvel[4][1]);

// const both =marvel.concat(dc)
// console.log(both);
// console.table(both);

const all_heros= [...marvel,...dc]// it works same as concat just we can add more values using .. value unlike concat just one value
console.log(all_heros);

const another_array = [1,2,3,4,[5,6,7],8,9,[10,11,[4,5,6]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("purvesh"))
console.log(Array.from("purvesh"))
console.log(Array.from({name:"Purvesh"}))//interesting case it will give an empty array since we have not defined that about what we have to create array either keys or value

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
