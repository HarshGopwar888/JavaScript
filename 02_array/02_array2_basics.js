const hero=["Thor","spider","hulk","ironman"]
const fruit =["apple","mango","grapes","melon"]

//hero.push(fruit) //not merger-- one arr inside sec array
//console.log(hero); //["Thor","spider","hulk","ironman",["apple","mango","grapes","melon"] ]

const all=hero.concat(fruit)
console.log(hero); //[ 'Thor', 'spider', 'hulk', 'ironman' ]

console.log(all); // mix  all two array

const full=[...hero,...fruit]
console.log(full); //mix all two array


const n1= [1,2,3,4,[5,6,7],8,[6,7,[,2,3,4]]]

const n2=n1.flat(Infinity)
console.log(n2); //gives single array

console.log(Array.isArray("Harsh")) // array available or not -- false

console.log(Array.from("Harsh")) //[ 'H', 'a', 'r', 's', 'h' ]

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3)); //[100,200,300]


