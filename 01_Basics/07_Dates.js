
let MyDate=new Date()
console.log(MyDate.toString())
console.log(MyDate.toDateString())
console.log(MyDate.toLocaleDateString())
console.log(typeof MyDate)

let MyTimeStamp=Date.now()
console.log(MyTimeStamp)
console.log(MyDate.getTime())
console.log(Math.floor(Date.now()/1000))