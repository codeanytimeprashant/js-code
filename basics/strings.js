// Strings in JS

const name = "Prashant"

const repoCount = 50

// Outdated approach for consoling strings as output
console.log(name + repoCount + "Value");

// Right approach using back ticks (``)

console.log(`Hello My name is ${name} reposcount is ${repoCount}`);


const gameName = "Prashant-game-com"

console.log(gameName[0]);
console.log(gameName.__proto__);

// function of strings in js 
console.log(gameName.length);
console.log(gameName.toUpperCase());




console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hello'))

console.log(gameName.split('-'));

