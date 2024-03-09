//Immediately invoked Function expressions(IIFE)


(function chai(){
    //named iife
    console.log(`db connected`);
})();// to end this iife we need to add semicolon at end explicitly for the next iife to run


//(first parenthesis is used for function definition )  (second parenthesis is used for immediate exceution)
//global scope ke pollution se problem hoti hai kai baar toh uss global scope ke joh variables hai  ya unse ho rahe pollution ko hatane ke liye humne iife ka use kiya hai 
((name) => {
    //unanamed iife 
    console.log(`db connected to ${name}`);
})('Purvesh');
