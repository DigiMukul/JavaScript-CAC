// Objects in detail

const olduser = new Object() //singleton object

const user={} //nonsingleton object

//console.log(user);


//
const appuser={}

appuser.id="1235lkm"
appuser.name="Digi"
appuser.age=18
appuser.logIn=false

//console.log(appuser);


//object of object
const newuser = {
    email : "abc@xyz.com",
    userid :{
        Profile:{
            firstName: "Sanjay",
            lastName: "Sharma"
        }
    }

}

//console.log(newuser.userid,profile);

 //option chaning
 
//console.log(newuser.userid?,profile); //agar userid exsist hi ni krta to y skip kr dega



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//combine 2 object
const obj3 = {obj1, obj2}
console.log(obj3)// it will make object of object

// so you can do like this
const obj4= Object.assign(obj1, obj2)
console.log(obj4)

const obj5= Object.assign({}, obj1, obj2)//optional parameter {}
console.log(obj5)



//one  more easy and latest way Spread function like in array
const obj6={...obj1, ...obj2}
console.log(obj6);



//
console.log(Object.keys(appuser)); //this will print all the Object key in array
console.log(Object.values(appuser));//this will print all the Object values in array
console.log(Object.entries(appuser));// ek key and value ko seprate array m convert kr dega 

console.log(appuser.hasOwnProperty('logIn'))//check that logIn key is available in object or not


