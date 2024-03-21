const score=400
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length());//convert it into string and uses string property
console.log(balance.toFixed(2));//100.00 output after decimal 2 digits

const othernumber=123.54654

console.log(othernumber.toPrecision(4));//prints precise value/make it round off

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));//beautify it make it readable

//++++++++++++++++++++ maths +++++++++++++++++++++++//
console.log(Math);//it is an object
console.log(m=Math.abs(-4));//+4
console.log(Math.round(5.6));//6
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.9));//4
console.log(Math.min(4,6,5,4,));//4

console.log(Math.random());//produce random number
console.log((Math.random()*10)+1);//random numbers are produced b/t 0 to 10
console.log(math.floor(Math.random()*10)+1);//will produce random number but decimals will be cutoff and floor values ae taken


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+2))+min);


