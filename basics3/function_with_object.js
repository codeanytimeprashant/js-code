// using (...) known as Rest or spread operator 
// return vaues in the form of arrays
function add_to_cart(...num1){
    return num1
}

const final_price = add_to_cart(100,200,300,500)

console.log(final_price);


// Use of objects in functions 

const obj1 = {
    name : "Prashant",
    price : 999
}

function func_with_obj(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

// another way of passing object as an argument in functions 
func_with_obj({
    name : "Rahul",
    price : 499
})

// Passing of array into function

const newarray = [100,200,500]

function getsecondvalue(myarray){
    return myarray[1]
}

const array_value = getsecondvalue(newarray)
console.log(array_value);


