//arrays

const myarray=[1,2,3,4,5,6,true,"Pranav"]
//array is a object enables storing a collection of multiple items under a single variables name
//resizable
const myheros=["Shaktiman","Superman","batman"]
console.log(myarray[0]);

//array methods 
myarray.push(7)
myarray.push(8)//it pushes the element from last index
myarray.pop()//it removes the element from last index
myarray.unshift(0)//it pushes the element in 0th index
myarray.shift()
console.log(myarray);

console.log(myarray.includes(9));//returns boolean values true or false tells whether the element exsists or not
console.log(myarray.indexOf(7));//provides index of the element
const newArr=myarray.join()//adds all the element of array into string
console.log(myarray);
console.log(newArr);
console.log(typeof newArr);

//slice , splice
console.log("A",myarray);
const myn1=myarray.slice(1,3)//select the number between 1 and 3 where 1 is included an 3 is not
console.log(myn1);
const myn2=myarray.splice(1,3)//it removes the elements 1-3 from original array  
console.log(myarray);
console.log(myn2);


console.log("****************  next  *********************");
const marvelheros=["Thor","Ironman","Spiderman"]
const dcheroes=["Superman","flash","Wonder Women"]
marvelheros.push(dcheroes)//creates takes the whole array and pushes it into marvelheroes as a single element
console.log(marvelheros);
console.log(marvelheros[3][1]);//prints flash

const newarray=marvelheros.concat(dcheroes) 
console.log(newarray);

const allnewheores=[...marvelheros,...dcheroes]//spread operator prefered
console.log(allnewheores);



