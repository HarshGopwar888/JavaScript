//-----Types of Memory----

// Stack(Primitive Datatypes) 
//call by value
// Value can be changed

let myName="Harsh"
let yourName = myName
yourName = "ved"

console.log(myName) //Harsh
console.log(yourName) //Ved

//Heap (Non primitive)
//call by reference
//value cannot be changed

let user1= {
    email :"harsh@g.com",
    password : 1234,
}

let user2=user1

user2.email="google.com"

console.log(user1) // google.com
console.log(user2) // google.com





