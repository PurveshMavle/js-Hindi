const myObject= {
    js: 'Javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js","py","cp","rb","java"]
for (const key in programming) {
    console.log(programming[key]);
}
// const map =new Map() //in maps all values are distinct in nature they are not repeated
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// for (const key in map) {// here maps are not iterable so it will not print anything here
//   console.log(key);
// }