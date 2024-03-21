let mydate=new Date()//objects
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleTimeString());

let mycreateddate=new Date(2023,11,23)//month start with 0 so 11 means dec
console.log(mycreateddate.toDateString());

let mycreateddate1=new Date(2023,11,23,5,11)
console.log(mycreateddate.toLocaleString());

let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(Math.floor(Date.now()/1000));


