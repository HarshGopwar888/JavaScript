//--------------Methods to use String--------------
const name= 'Harsh'
const age=22

console.log(name + age + "  Gopwar" );

//New way to concate using ${}
console.log(`Hello my name is ${name} and my age is ${age}`);

const game=new String ('HarshGopwar')
console.log(game);    //[string: 'HarshGopwar]

console.log(game[5]);  //G
console.log(game.__proto__);  //{}


console.log(game.length) // 11

console.log(game.toUpperCase()); //HARSHGOPWAR

console.log(game.charAt(5)); //G

console.log(game.indexOf('G')); //5

const newString=game.substring(0,4)
console.log(newString); //Hars

const n2String=game.slice(-8,7) 
console.log(n2String);   //shGo

const n3String= "   Harsh   "
console.log(n3String); //     Harsh 
console.log(n3String.trim()); //Harsh  delete extra space in string

const url= "http://harsh.com/disha%20patani"
console.log(url.replace('%20','100-')); // replace %20 by 100-

console.log(url.includes('harsh'));  // checks available or not

console.log(game.split('-')); //split string using given element 
