console.log(Math.PI);

Math.PI = 5 
console.log(Math.PI);

const obj = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(obj);

Object.defineProperty(Math,"PI",{
    writable : true
})


console.log(Object.getOwnPropertyDescriptor(Math,"PI"))