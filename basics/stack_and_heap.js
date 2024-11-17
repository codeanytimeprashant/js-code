// Stack : Primitive data_types are stored in it 

let email = "Prashant@gmail.com"

let email_2 = email
email_2 = "Shanu@gmail.com"

console.log(email);
console.log(email_2);

// Heap memory : Non-Primitive data_types are stored in it

let my_obj = {
    type : 'car',
    color : 'red',
}

let my_obj_2 = my_obj

my_obj_2.type = 'bike'

console.log(my_obj.type);
console.log(my_obj_2.type);


