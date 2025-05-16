const score=100
console.log(score); //100


const balance=new Number(100)  
console.log(balance); //[Number:100]

console.log(balance.toString().length);  //3
console.log(balance.toFixed(2));   //100.00

const n1=28.4567
console.log(n1.toPrecision(3));  //round up 28.5

const  hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000



//----------Maths--------
console.log(Math);  // object [math]  {}

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.7)); //5
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.2)); //4
console.log(Math.min(4,3,7,5,9)); //3
console.log(Math.max(4,3,7,5,9)); //9
console.log(Math.random()); //print random value  betwen 0-1 
console.log((Math.random()*10 )+ 1 ); 

const min= 10
const max = 20
 console.log(Math.floor(Math.random( ) * (max-min + 1)) + min) // Gives floor value between 10 and 29 using roundup

