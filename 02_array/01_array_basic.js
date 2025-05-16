//-----Arrays---

const myArr= [0,1,2,3,4,5,]
const Hero=["Lion","tiger","bear","Wolf"]

const myArr2= new Array(1,2,3,4)

console.log(myArr[3]); //3

//----Array Methods

myArr.push(6)
console.log(myArr); //0,1,2,3,4,5,6

myArr.pop() //remove last Element
console.log(myArr); //0,1,2,3,4,5

myArr.unshift(9) //add element in first
console.log(myArr); //9,0,1,2,3,4,5

myArr.shift() // remove first element
console.log(myArr); //0,1,2,3,4,5

console.log(myArr.includes(9)); //False
console.log(myArr.indexOf(9)); //-1

const newArr=myArr.join()
console.log(myArr); // [0,1,2,3,4,5]
console.log(newArr); //0,1,2,3,4,5 converted into string

//Slice ,Splice
// slice doesn't change orignal array 
//slice exclude last range
// splice  change orignal array
//splice include last range 


console.log("A =",myArr); // A= [0,1,2,3,4,5]
const myn1=myArr.slice(1,3) //

console.log(myn1);  // [1,2]
console.log("B =",myArr); // B= [0,1,2,3,4,5]

const myn2=myArr.splice(1,3)
console.log("C= ",myArr);  // [0,4,5,]
console.log(myn2); //[1,2,3]






