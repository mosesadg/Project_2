// for (var i=1; i<100; i=i+2){
//
//   console.log(i);
// }

// var instructors =["andy", "adam", "jesse"];
// //
// // for (var i =0; i<instructors.length;i++){
// //   console.log(instructors[i]);
// // }
//
// for (i in instructors){
//
//   console.log(instructors[i])
// }
// var i =1;
// while (i<100){
//   console.log(i);
//   i=i+2;
// }

//FIZZ BUZZ
// for (var i =1; i <=15; i++){
//
//   if(i %3 ==0 && i%5 ==0){
//     console.log("FIZZBUZZ");
//   }
//   else if(i%3 ==0){
//     console.log("FIZZ");
//   }
//
//   else if(i%5 ==0){
//     console.log("BUZZ");
//   }
//   else {
//     console.log(i);
//   }
// }


// for (var i =1; i <=10; i++){
//
//   if(i%3 ==0){
//     console.log("Fizz");
//   }
//
//   else if(i%5 ==0){
//     console.log("Buzz");
//   }
//   else {
//     console.log(i);
//   }
// }

//bouncer app

// var age =24;
//
// if(age < 18){
//   console.console.log("You are too young to enter this");
// }
//
// else if(age >18 && age <21){
//
//   console.log("Come on on! But no drinking");
// }
//
// else{
//   console.log("Come on in");
// }
// whitelisted vs blacklisted
// var age =84;
// if (age >21){
//   console.log("come on in");
//
// }
//
// else if (age >75){
//   console.log("Come on in, but it might get loud");
// }
//
// else {
//   console.log("scram kid");
// }


for(var i =0; i<17; i++)
{
var st='';
if(i%3===0){st +="fizz";}
if(i%5===0){st +="buzz";}
console.log(st||i);
}
