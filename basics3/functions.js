
function print_hello(){
    console.log("Hello");
    console.log("World");
}


print_hello()

// function with parameters 
function print_username(username){
    if (!username)
    {
        return `Please enter a username`
    }
    return `${username} just logged in`
    
}

// calling function with the help of passing arguments into it 
const result = (print_username())
console.log(result);
