const coding =["js","rubys","py","cpp"]

coding.forEach(function (item) {////call by function dont have name and in definition we can have any variable name

    // console.log(item);
})
coding.forEach((item) => {
    
        // console.log(item);

});

function printme(item) 
 {
    // console.log(item);
}

coding.forEach(printme);

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const mycoding =[
    {
        languageName:"Javascript",
        languagefile:"js"
    },
    {
        languageName:"pyhton",
        languagefile:"py"
    },
    {
        languageName:"Java",
        languagefile:"jv"
    }
]

mycoding.forEach((item)=>{
 
    console.log(item.languageName);
    console.log(item.languagefile);
})