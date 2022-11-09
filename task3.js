// Calculate the Number of Days Between Two Dates
let date1 = "11/01/2021";
let date2 = "8/05/2022";

// expected outcome: 276
// const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds


// const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
// console.log(diffDays);
let difference = date2.getTime() - date1.getTime();
console.log(difference);

//could not figure out