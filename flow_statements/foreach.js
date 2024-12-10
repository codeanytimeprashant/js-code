
// Syntax for foreach loop 
const arr = [1,2,3,4,5]


arr.forEach(function (val) {
    console.log(val);
});

// Use of for loop using arrow function 
const myArray = ["hi","hello","namaste"]

myArray.forEach( (val) => {
    console.log(val);
    
})

// Passing of a userdefined function into foreach loop to print it values to consoles.
const ourarr = [5,6,7,8]

function printMe(val){
    console.log(val);
}

ourarr.forEach(printMe)

// Other Methods on foreach loop to access all the item,index and arr.
ourarr.forEach((item,index,arr) =>{
    console.log(item,index,arr);
    
})

// Accesing values from object which are in an array. 

const objarr = [
    {
        LanguageName : "Javascript",
        LanguageFile : "js"
    },
    {
        LanguageName : "Python",
        LanguageFile : "py"
    },
    {
        LanguageName : "cpp",
        LanguageFile : "c++"
    },
]

objarr.forEach((item) => {
    console.log(item.LanguageFile);
    
})