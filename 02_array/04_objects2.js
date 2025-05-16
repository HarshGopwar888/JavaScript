//const tinder=new Object() // same as  below
const tinder={}
 tinder.id = "12345"
 tinder.name= "Harsh"
console.log(tinder); // id: '12345', name: 'Harsh'

//object inside object 
const insta= {
    email: "instagram.com",
    fullname :{
        user :{
            first :"Harsh",
            last :" Gopwar"
        }
    }
}

console.log(insta.fullname);  // user: { first: 'Harsh', last: ' Gopwar'


const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "c", 4: "d"}

 //const obj3= {obj1 , obj2}  //MERGER two objects
//const obj3=Object.assign(obj1,obj2)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 

const obj3={...obj1,...obj2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);


console.log(tinder);

console.log(Object.keys(tinder)); //'id', 'name'
console.log(Object.values(tinder)); //'12345', 'Harsh'
console.log(Object.entries(tinder)); //'id', '12345' ], [ 'name', 'Harsh' ]

console.log(tinder.hasOwnProperty('name')); //true

const course = {
    cname : "javascript",
    fees : "1000",
    teacher : "harsh"
}
console.log(course);

const {teacher} = course // shortcut
console.log(teacher);


const {teacher : teach} = course //teach
console.log(teach);
