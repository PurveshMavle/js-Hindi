//for of

["","",""]//arrays
[{},{},{}]// objects in array

const arr =[1,2,3,4,5]
for (const index of arr) {
    console.log(index);
    
}

const greeting ='Hello world!'
for (const greet of greeting) 
{
    if(greet==' ')
    {
        continue;
    }

    console.log(greet);
}

//maps
const map =new Map() //in maps all values are distinct in nature they are not repeated
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value);

}

const myObject ={

    game1:'Nfs',
    game2:'spiderman'
}

// for (const [key,value] of myObject) { // objects are not iterable in this for of syntax
//     console.log(key,':-',value);

// }


