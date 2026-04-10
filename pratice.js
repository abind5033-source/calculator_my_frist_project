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
//   console.log(marks, " : invalide score");
// } else if (80 <= marks || marks <= 100) {
//   console.log(marks, " : A grades ");
// } else if (70 <= marks || marks <= 79) {
//   console.log(marks, " : B grades ");
// } else if (60 <= marks || marks <= 69) {
//   console.log(marks, " : C grades ");
// } else if (50 <= marks || marks <= 59) {
//   console.log(marks, " : D grades ");
// } else if (35 <= marks || marks <= 49) {
//   console.log(marks, " : E grades ");
// } else {
//   console.log(marks, " : F grades ");
// }
// this code written by me 



let marks = prompt("Enter your scores");  // Fixed typo: "inter" → "Enter", "scroes" → "scores"
marks = parseInt(marks);  // Convert string input to number

if (marks > 100 || marks < 0) {  // Check for invalid range
    console.log(marks, ": Invalid score");
} else if (marks >= 80 && marks <= 100) {  // Fixed: use && for range
    console.log(marks, ": A grade");
} else if (marks >= 70 && marks <= 79) {
    console.log(marks, ": B grade");
} else if (marks >= 60 && marks <= 69) {
    console.log(marks, ": C grade");
} else if (marks >= 50 && marks <= 59) {
    console.log(marks, ": D grade");
} else if (marks >= 35 && marks <= 49) {
    console.log(marks, ": E grade");
} else {
    console.log(marks, ": F grade");
}

// and this code written by perplexity