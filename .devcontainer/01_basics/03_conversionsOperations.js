let score="33anc"//if only number then it will convert it 
                    /*but if it has num and string at a time
                    then also it conver but the real type is 
                    NaN(not a number)
                    NaN will be printed in case of null,String and undefined*/

console.log(typeof score);
let valueInNum=Number(score)
console.log(typeof valueInNum);
console.log( valueInNum);


//"33" => 33
//"33abc" => NaN
//true =>1 ; false => 0

let isloggedIn=1
let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

//1 => true 0 => false
//"" => false
//"hitesh" => true

let somenumber=33
let somenumberString=String(somenumber);
console.log(typeof somenumberString);

//******************************** Operations ********************
let value=3
let negvalue=-value;
console.log(negvalue);

let str1="hello"
let str2="Pranav"
let str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");//first it will add the merge string with number


