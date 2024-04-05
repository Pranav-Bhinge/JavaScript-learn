//singleton

//object literals
//Object.create singleton and another way to express objects

const mysum= Symbol("key1")//we haveto declare sybol first

const jsUser={
    name:"hitesh",
    "full name":"Pranav Bhinge",
    age:18,
    location:"Pune",
    mail:"pb@gmail.com",
    [mysum]:"key1"//syntax of symbol made it act like key 
} 

console.log(jsUser.mail);//if we uses . then we not need to write it in ""quotes 
console.log(jsUser["name"]);//but here we have to give in double quotes
console.log(jsUser["full name"]);//inthis case we have to use square brac notation 
console.log(jsUser[mysum]);//printing symbol


jsUser.mail="pb23@google.com" //this is how you can change or override the values in objects
Object.freeze(jsUser)//this is how we can freeze value in object
jsUser.mail="pb23@google.com"

