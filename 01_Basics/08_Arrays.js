//array
/* The Array object, as with arrays in other programming languages,
 enables storing a collection of multiple items under a single variable name, 
 and has members for performing common array operations.*/

 const myArray=[0,1,2,3,4,5]
 console.log(myArray[3]);
 const myheros=['Shakitman','Salman Khan']
 console.log(myheros)
 const myarray2=new Array(1,2,3,5,6)
 console.log(myarray2)

 // array methods

 myArray.push(6)
 console.log(myArray)
 myArray.pop()
 myArray.unshift(9)
  myArray.shift()
console.log(myArray.includes(9))
console.log(myArray.indexOf(3))
 //console.log(myArray)

 //splice slice
 console.log("A",myArray)
 const myn1=myArray.slice(2,4)
 console.log(myn1)                   // output A [ 0, 1, 2, 3, 4, 5 ]
                                                //  [ 2, 3 ]
                                
 console.log("B",myArray)
 const myn2=myArray.splice(0,4)      // output  B [ 0, 1, 2, 3, 4, 5 ]
                                            //    [ 0, 1, 2, 3 ]
 console.log(myn2)

 /////////////////////////// Part 2 ///////////////////
 const marvel_heros=['superman','thor','Ironman']
 const dc_heros=['spinderman','flash','badman']
 marvel_heros.push(dc_heros)
 console.log(marvel_heros)
  console.log(marvel_heros[3][1])
   const allHeros =marvel_heros.concat(dc_heros)
  console.log(allHeros)

  const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5,6]]]
  const real_array=another_array.flat(Infinity)
  console.log(real_array)
  console.log(Array.isArray("Piyush"))  // false
    console.log(Array.from("Piyush"))    //  [ 'P', 'i', 'y', 'u', 's', 'h' ]
 console.log(Array.from({name:"Piyush"}))  //[]

 let scroe1=100;
 let scroe2=200;
 console.log(Array.of(scroe1,scroe2))