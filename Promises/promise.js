 const promiseOne = new Promise(function(resolve,reject){
     setTimeout(function(){
         resolve({Username : 'Prashant4043',email : "ppadwal520@gmail.com"})
     },1000)
 })

 promiseOne.then(function(user){
     console.log(user);  
 })


const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Prashant49",email : "hello@example.com"})
        }else{
            reject("Something went wrong")
        }
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username); 
})
.catch(function(error){
    console.log(error); 
})
.finally(() => console.log("Promise is either Resolved or Rejected"))