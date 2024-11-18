let my_date = new Date()

//console.log(my_date.toString());
//console.log(my_date.toDateString());
//console.log(my_date.toLocaleString());

console.log(typeof my_date);

let created_date = new Date(2023,0,19)
console.log(created_date.toDateString());

// Timestamp
let time_stamp = Date.now()
console.log(time_stamp);
console.log(created_date.getTime());
console.log(Math.floor(Date.now()/1000));



