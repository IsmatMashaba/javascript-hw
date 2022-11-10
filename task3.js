// Calculate the Number of Days Between Two Dates
let date1 = "11/01/2021";
let date2 = "8/05/2022";

// expected outcome: 276


// solution:

const date1InDateFormat = new Date(date1);
const date2InDateFormat = new Date(date2);
const diffTime = Math.abs(date2InDateFormat - date1InDateFormat);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays + " days");

