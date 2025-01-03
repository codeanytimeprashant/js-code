const User = {
    username : "Prashant4043",
    password : "123",
    getuserdetails : function (){
        console.log(`Usename: ${this.username}`);
        
    }
}

console.log(User.getuserdetails());

function User2(username,password){
    this.username = username;
    this.password = password;

    return this
}

const UserTwo = new User2("Prashant40",1234)
console.log(UserTwo);

const UserThree = new User2("Rahul45",8627)
console.log(UserThree);


