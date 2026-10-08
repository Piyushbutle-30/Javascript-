console.log(2>1);
console.log("2">1)
console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

// ===
console.log("2"=== 2)

// primitive

// string,number,Boolean,null,undefine,symbol,BigInt
const score=100
const scorevalue=100.9//number datatype
const isLoggedIn= false
const outsidetemp=null  //object datatype
let userEmail;  //undefine

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)

const bigNumber=12345678908567n
console.log(bigNumber)
// non primitive
// array,object,functions

const heros=["SuperMan","Dora"] ;// arrays
let myobj={    //object
    name:"Piyush",
    age:22
}
const myfunction=function(){   // function datatype
    console.log("Hello World");
}

console.log(typeof id);

