const mysym=Symbol("key1")
const Juuser={
    name:"Piyush",
    age:23,
    Location:"Nagpur",
    Email:"piyushbutle@gmail.com",
    [mysym]: "mykey1"

}
console.log(Juuser.Email)
console.log(Juuser["Email"])

// symbol
console.log(Juuser[mysym])
Juuser.email="piyushbutle@gamil"
//Object.freeze(Juuser)
console.log(Juuser)

Juuser.greeting=function(){
    console.log("Hello World")
}
console.log(Juuser.greeting);//output ::: undefine

Juuser.greetingtwo=function(){
    console.log(`Hello World,${this.name}`);
}
console.log(Juuser.greetingtwo())//Hello World,Piyush