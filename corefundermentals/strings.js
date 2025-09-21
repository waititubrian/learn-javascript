let day = "Tuesday ";

console.log(day.length);  // get string length
console.log(day.slice(0,4));
console.log(day[1]);
//tue  day
let splitDay = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate - date);  // Convert string to number
console.log(diff);
diff.toString();  // Convert number to string

let newQuote = day + "is Funday day";
console.log(newQuote);
let val = newQuote.indexOf("day", 5);
console.log(val);
// Tuesday is Funday
let count = 0;
let vall = newQuote.indexOf("day");
while (vall !== -1){
    count++;
    vall= newQuote.indexOf("day", vall + 1);
}
console.log(count);