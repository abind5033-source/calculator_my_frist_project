// //firstDay
// const instagramId = {
//     intaId : "shardhakhapra",
//     blueTick : true,
//     follow : false,
//     posts : 195,
//     followers : 569000,
//     following : 4,
//     name : "shardha khapra",
//     threadId : "shradhakhapra",
//     pronuon : " Entrepreneur",
//     bio : "apna college  ki teacher",

// };
// console.log(instagramId);









//secondDay

// let num = prompt("enter a number:");
// if(num % 5 == 0){
//     console.log( num + "number is multiple by 5");
// }else{
//     console.log( num + "number is not multiple by 5");
// }





// let marks = prompt("inter your scroes");

// if (marks > 100) {
//   console.log(marks, " : invalid score");
// } else if (80 <= marks || marks <= 100) {
//   console.log(marks, " : A grade ");
// } else if (70 <= marks || marks <= 79) {
//   console.log(marks, " : B grade ");
// } else if (60 <= marks || marks <= 69) {
//   console.log(marks, " : C grade ");
// } else if (50 <= marks || marks <= 59) {
//   console.log(marks, " : D grade ");
// } else if (35 <= marks || marks <= 49) {
//   console.log(marks, " : E grade ");
// } else {
//   console.log(marks, " : F grade ");
// }
// this code written by me 






// let marks = prompt("Enter your scores");  // Fixed typo: "inter" → "Enter", "scroes" → "scores"
// marks = parseInt(marks);  // Convert string input to number

// if (marks > 100 || marks < 0) {  // Check for invalid range
//     console.log(marks, ": Invalid score");
// } else if (marks >= 80 && marks <= 100) {  // Fixed: use && for range
//     console.log(marks, ": A grade");
// } else if (marks >= 70 && marks <= 79) {
//     console.log(marks, ": B grade");
// } else if (marks >= 60 && marks <= 69) {
//     console.log(marks, ": C grade");
// } else if (marks >= 50 && marks <= 59) {
//     console.log(marks, ": D grade");
// } else if (marks >= 35 && marks <= 49) {
//     console.log(marks, ": E grade");
// } else {
//     console.log(marks, ": F grade");
// }

// // and this code written by perplexity









// // after correcting code ( my code ) 

// let marks = prompt("enter you score : ")

//  if (80 <= marks && marks <= 100) {
//   console.log(marks, " : A grades ");
//  } else if (70 <= marks && marks <= 79) {
//   console.log(marks, " : B grades ");
//  } else if (60 <= marks && marks <= 69) {
//   console.log(marks, " : C grades ");
//  } else if (50 <= marks && marks <= 59) { 
//   console.log(marks, " : D grades ");
//  } else if (35 <= marks && marks <= 49) {
//   console.log(marks, " : E grades ");
//  }else if (0 <= marks && marks <= 34) {
//   console.log(marks, " : F grades ");
//  } else {
//   console.log(marks, " : invalid score");
//  } 



// day three 


// var num = 0;
// if (num % 2 == 0){
//     console.log( num );
//  } 
// num++;
// console.log( num );






// for (let i = 0 ; i <= 100 ; i++){
//      console.log(  "i = ", i );
// }





// var num = 0;
// for (let i = 0 ; i <= 100 ; i++){
//     if (num % 2 == 0){
//     console.log(  "even number = ", num );
//  } 
// num++;
// }







// day four

// let student = [85,97,44,37,76,60];
// let sumMarks = 0 ;
// for ( let i = 0 ; i < student.length ; i++ ){
//      sumMarks += student[i] ;
// }
// console.log( "sum of marks  of student =" ,sumMarks);
// console.log( "average marks of student " , sumMarks /student.length );




// let priceOfItem = [250,645,300,900,50]
// for ( let i = 0; i < priceOfItem.length ; i++){
//    let percentvalue = priceOfItem[i] / 10 ;
//    priceOfItem[i] -= percentvalue;
// }
// console.log(priceOfItem); 




// let company = ["Bloomberg","Microsoft","Uber","IBM","Netflix"];

// //removin first element 

// company.shift();
// console.log(company);

// //remove Uber & add ola in its place 

// company.splice(2,1, " Ola" );
// console.log(company);

// //add Amazon at the end

// company.push("Amazon");
// console.log(company)




//day five

//multipilcation  two number by uding arrow function

// let sum = (a,b)=>{
//     console.log ( a*b );
// }




// day six 

// let change = document.querySelector("h2");
// console.dir(change.innerText);
// change.innerText = change.innerText + "from apna college students ";
// console.dir(change.innerText);

let change = document.querySelectorAll(".box");
// console.log(change);