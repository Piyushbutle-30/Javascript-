const name="Piyush"
const repocount=50;
console.log(name+repocount+" "+"value");

console.log(`Hello my name is ${name} my repo count is ${repocount}`);

const gamename=new String('Piyush')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('y'));

const newString=gamename.substring(0,4)
console.log(newString);
const anotherString=gamename.slice(-6,4)
console.log(anotherString);

const newstring='    piyush    '
console.log(newstring.trim());

const url= "https://obscure-dollop-x5447644455gc6gwr.github.dev/"

console.log(url.replace('-','20%'))
console.log(url.includes('   piyush   '))