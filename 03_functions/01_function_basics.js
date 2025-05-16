//------FUNCTIONS--------
function say() {
    console.log("H ");
    console.log("A ");
    console.log("R");
    console.log("S ");
    console.log("H ");
    
}
say()//print function

function add(n1,n2){ //n1,n2 are parameter
    console.log(n1 + n2);
}
add(3,4) //7  3,4 are Arguments

function sub(n3,n4)
{
    let result=(n3 - n4);
    return result
    
}
const result = sub(9 , 3)
console.log("result=", result ); // result 6 

function multi(n5,n6)
{
    return n5 * n6
}
const r1 = multi(4,4)
console.log("Result=",r1); // 16

function message(username){
    return `${username} Good morning`
}
console.log(message("Harsh")); // Harsh Good morning

function m1(name="Harsh")
{
    if(!name){
        console.log("Please enter name");
    return
}
    return `${name} Guud night`
        
}
console.log(m1()); //Harsh Guud night

function price(...n1) //...Rest or spread operator
{
    return n1

}
console.log(price(2,4,5,6,7,8,9));//2,4,5,6,7,8,9
  

const user={
    username :"Harsh",
    age :22
}
function handleObject(anyobject)
    {
        console.log(`username is ${anyobject.username} and price is 
                        ${anyobject.age}`);

        
    }
//handleObject(user)

handleObject({
    username:"sam",
    age: 300
})

const arr=[200,300,100,400]
function secvalue(getArray)
{
    return getArray[2]
}
console.log(secvalue(arr)); //100

console.log(secvalue([200,300,999])); //999
