const balance = new Number(400)

//console.log(balance);

//console.log(balance.toString()); 
//console.log(balance.toString().length);

//fixed values after decimal
//console.log(balance.toFixed(2));

// Pecision value (round off upto digit which you have given)

const another_value = 234.7890
//console.log(another_value.toPrecision(4));
//console.log(another_value.toPrecision(3));
//console.log(another_value.toPrecision(2));

// Indian currency 
const currency = 100000
//console.log(`Rs${currency.toLocaleString('en-IN')}`);

// Maths in JS +++++++++++++++++++=

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.sqrt(25));

// Generating Random Number in JS
//console.log(Math.random());
//console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min) // always between 10 and 20 







