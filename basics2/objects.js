// object literals

mykey = Symbol("mykey1")

const JsUser = {
    name : "Prashant",
    age : 20,
    location : "Solan",
    [mykey] : "mykey1"
}

console.log(JsUser.location);
console.log(mykey);




/////////////////////////////////////////////////////////////////
// Objects combination 

const obj1 = {1: 'a',2: 'b'}
const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

// Objects in arrays which mainly comes from the info of database 

const User = [
    {
        id : 1,
        name : "Rahul"
    },
    {
        id : 2,
        name : "Ram"
    }
]

console.log(User[0].name);

// converts objects into the form of arrays because now we can use loops in this arrays but not in objects 
console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
// entries function converts every single key-value pairs into a seperate arrays in which we can perform actions 
console.log(Object.entries(JsUser));

// hasOwnProperty = check whether the key is present int this object or not .. 
console.log(JsUser.hasOwnProperty("location"));



