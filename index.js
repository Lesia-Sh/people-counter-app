// document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);

// let myAge = 44;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// initialize the count as 0
// listen for clicks on the increment button
// increment приріст the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//   console.log("The button was clicked");
// }

// function firstFunction() {
//   console.log(42);
// }
// firstFunction();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function lapSum() {
//   //   let totalTime = lap1 + lap2 + lap3;
//   console.log(lap1 + lap2 + lap3);
// }
// lapSum();

// let lapsCompleted = 0;

// function incrimentPlus() {
//   lapsCompleted = lapsCompleted + 1;
//   console.log(lapsCompleted);
// }
// incrimentPlus();
// incrimentPlus();
// incrimentPlus();

// initialize the count as 0
// listen for clicks on the increment button
// increment приріст the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let countEl = document.getElementById("count-el");
// // it is called "to pass in arguments" which means that we are giving the function data to work with like here to spicify the ID of the element we want to grab
// console.log(countEl);

// let count = 0;

// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
//   console.log(count);
// }

// grab the count-el element, store it in a countEl variable

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  // set countEl's innerText to the count
}
function save() {
  let countScr = count + " - ";
  saveEl.textContent += countScr;
  countEl.textContent = 0;
  count = 0;
}

// let username = "Lesia";
// let message = "You are great";
// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);
