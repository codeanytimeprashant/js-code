// console.log(Math.PI);

const pi = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(pi);


const User = {
    username : "Prashant",
    isLoggedIn : true
}

console.log(Object.getOwnPropertyDescriptor(User,"username"))

// User.username = "Rahul"
// console.log(User.username);

Object.defineProperty(User,"username",{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(User,"username"))

User.username = "Rahul"
console.log(User.username);



