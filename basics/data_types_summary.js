//types of datatypes
//1. Primitive : 
//                string, Number, Bollean, null, undefined , symbol, BigInt



//2. Refrence or non primitive :
//                            Array, Objects, Functions 


//declaration of array 
const fruits = ["apple","orange","banana"]
console.log(fruits[0]);

//declaration of objects = using "." operator we can access key and value pairs in objects

let my_obj = {
    name : 'Prashant',
    age : 20,
}

console.log(my_obj.name);

//declaration of function
const myfunction = function(){
    console.log("hello world");
    
}


// "==="

const id = Symbol('123')
const another_id = Symbol('123')

console.log(id===another_id);


