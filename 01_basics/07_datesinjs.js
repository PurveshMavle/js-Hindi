//dates

let MyDate = new Date()

console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toISOString());
console.log(MyDate.toJSON());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toLocaleString());
console.log(MyDate.toLocaleTimeString());

console.log(typeof (MyDate));

// let Mycreateddate =new Date(2023,0,23)

// let Mycreateddate =new Date(2023,0,23,5,3)

// let Mycreateddate =new Date("2023-01-14")

let Mycreateddate =new Date("01-14-2023")

console.log(Mycreateddate.toLocaleString());

let mytimestamp = Date.now()

// console.log(mytimestamp)
// console.log(Mycreateddate.getDate())
console.log(Math.floor(Date.now()/1000))

let Newdate =new Date()
console.log(Newdate);
console.log(Newdate.getDay());
console.log(Newdate.getMonth()+1);

Newdate.toLocaleString('default',{
    weekday:"long",
    
})
