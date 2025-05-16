//-------Dates in JavaScript----------

let myDate= new Date()

console.log(myDate.toString()); //current date in string
console.log(myDate.toDateString()); //current date without time
console.log(myDate.toLocaleString()); //Date and Time
console.log(typeof myDate); // Object


let newDate= new Date(2025,0,18)
console.log(newDate.toDateString()); //Sat Jan 18 2025
console.log(newDate.getTime()); //get Time of date

let myTimeStamp= Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


let oldDate= new Date()
console.log(oldDate);

console.log(oldDate.getMonth()+1); //get Month Number

console.log(oldDate.getDay()); //Get day  Number

oldDate.toLocaleString('default',{ 
    weekday : "long"})