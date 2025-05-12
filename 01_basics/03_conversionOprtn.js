let score= "Harsh"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number (score)
console.log(typeof valueInNumber);
console.log( valueInNumber);

/*
"33"  => 33
"33abc" => NAN
true =>1  false=>0
*/

let isLoggedIn="Harsh"

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 =>true   0=>false
"" => false
"Harsh" => true
*/


let someNumber=45
let stringNumber= String (someNumber)
console.log(stringNumber);

// *********Operation***********

let v1 = 3
let negValue = -v1
console.log(negValue); // -3


console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2 ); //122
console.log(1 + 2 + "2");  //32

console.log(+true) ; //1
console.log(+"");     //0


let g1=100
++g1;
console.log(g1); // 101


