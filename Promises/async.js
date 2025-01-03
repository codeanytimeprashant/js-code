//  async function getAllusers() {
//     try{
//      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//      const data = await response.json() 
//      console.log(data);
//     }catch(e){
//         console.log("Error: ",e);
        
//     }
     
//  }
 
//  getAllusers()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

