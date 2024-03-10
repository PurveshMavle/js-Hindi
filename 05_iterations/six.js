// const coding =["js","python","ruby","django","cpp","java"]

//  const values = coding.forEach((item) => {
//     // console.log(item); 
//     return item
// });

// console.log(values);//so we conclude that forEach loop does not return any value

const mynum =[1,2,3,4,5,6,7,8,9,10]

 const Newnums = mynum.filter((num /*value which will iterate*/) =>  num > 4 /* condition*/ ) // it returns the value on its own since no scope defined
 const Newnums1 = mynum.filter((num) =>  { return num > 4})//explicitly we have to return since we hae defined it scope using curly braces
  
 console.log(Newnums);
 console.log(Newnums1);

 const Newnums2=[]

 mynum.forEach((num)=> {
 if (num>4) {
    Newnums2.push(num)
    
 }

 })
 console.log(Newnums2);

 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter((bk)=>bk.genre=='History')
  const userBooks1 = books.filter((bk)=>{return (bk.publish>=1995 && bk.genre=='History')})

//   console.log(userBooks);
  console.log(userBooks1);