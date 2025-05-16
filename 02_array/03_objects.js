//----------------Objects--------
//---Singleton----
// object.create

//--declare symboll
const sym=Symbol("name1")
const sym2=Symbol("name2")


//--object Literals
const user={
    name : "Harsh",
    "surname" : "Gopwar", 
    age :22,
    [sym]: "Nagpur", // symboll declare in object
    location : "Pune",
    email : "harsh.com",
    food : true,
    days :["mon","sun","sat"]
}

console.log(user.email);  //harsh.com
console.log(user["email"]); //harsh.com

console.log(user.surname); //Gopwar 


console.log(user[sym]); //nagpur

user.email="chat.com"
console.log(user.email); //email changed

//Object.freeze(user) // by doing user is freezed can"t change Now

console.log(user);


//Function
user.greeting=function(){
    console.log("Good morning");
    
}
console.log(user.greeting); //anonymous
console.log(user.greeting()); //Good morning

//print object key in function

user.greet2= function(){
    console.log(`Good night,${this.name}`);
    
}
console.log(user.greet2()); //Good night,Harsh