const myarr = [1,2,3,4]

console.log(myarr[0]);

myarr.push(5)
console.log(typeof myarr);

const newarr = myarr.join()
console.log(typeof newarr);


const cars1 = ["audi","mercedes","bmw"]
const cars2 = ["toyato","alto","tata"]
// using concat function

const new_Cars = cars1.concat(cars2)
console.log(new_Cars);

// Using spread operator
const new_cars = [...cars1,...cars2]
console.log(new_cars);


const imag_arr = [1,2,3,[3,4,5],6,[7,8,[9,10]]]

const real_arr = imag_arr.flat(Infinity)
console.log(real_arr);

console.log(Array.from("Prashant"));
console.log(Array.isArray([1, 2, 3])); // true

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




