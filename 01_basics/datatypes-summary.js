/*
-----Primtive Datatypes----
7 Types
call by value
Not Mutable(cannot change)
memory allocation - Stack


String
Number
Boolean
Null
undefined
Symbol
BigInt
*/
const string="Harsh"
console.log(typeof string)

const N1=100
console.log(typeof N1)
const islive=false
console.log(typeof islive)
const apple=null;
console.log(typeof apple)
let mango;
console.log(typeof mango)
let n1=123456789757575775n
console.log(typeof n1)

//---use of symboll---
  const Id= Symbol("123")
  const anotherId=Symbol("123")  
 
  console.log(Id == anotherId)
 console.log(typeof Id)
 





/*
---Reference--Non Primitive
call by Reference
Mutable (value can be changed)
Memory allocation Heap


Array,Objects,Functions
*/

//Array
const hero=["batman","ironman","spiderman"]

//Objects
let obj={
    Name : "harsh",
    age:33,
}

//Functions
const myFunction= function(){

    console.log("Helllo world");
    
}
console.log(typeof myFunction) //Function
