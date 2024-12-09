
// Syntax for writing switch statements 

const month = 3

switch (month) {
    case 1:
        console.log("The month is January");
        break;
    case 2:
        console.log("The month is Febrauary");
        break;
    case 3:
        console.log("The month is March");
        break;
    case 4:
        console.log("The month is April");
        break;

    default:
        break;
}

//// Falsy Values 

// false , 0, -0 ,BigInt 0n, ""()empty string , null , undefined , Nan
// Rest All values like arrays are Truthy Values 
// "0" , "false" , " ", [], function(){}

const UserEmail = []

if(UserEmail){
    console.log("Email Exists");
}
else{
    console.log("Email doesn't Exist");
}

// To check whehter the given array is empty or not 

if(UserEmail.length===0)
{
    console.log("Array is Empty");
}
else{
    console.log("Array is not empty");
}