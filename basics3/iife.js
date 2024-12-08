// Immediatey Invoked function expressions

// Becauser of polloution of global scope thats why we prefer iife 

// Named IIFE
(function chai(){
    console.log(`DB connected succesfully`);
}) ();

// make sure that the if we're using two iife statement then it should be ended using semicolon(;) to execute another iife statement.
// Simple IIFE
((name)=>{
    console.log(`DB2 connected succesfully ${name}`);
}) ("Prashant")


