// let marks = Array(6);

// let marks = new Array(20,40,35,12,37,100);

let marks = [20,40,35,12,37,100];
console.log(marks[2]);  // Retriving values present in the array
marks[3] = 14;  // Replace a number in array
console.log(marks);
console.log(marks.length); // Index starts from 0 length starts from 1
marks.push(64) // Add element to an array at the end
console.log(marks);
marks.pop();  // Remove element from an array at the end
console.log(marks);
marks.unshift(12);  // Add element to an array at the beginning
console.log(marks);
console.log(marks.indexOf(20));
console.log(marks.includes(120));  // validate whether an elemt is present in an array
console.log(marks.slice(2,5));  // Create a sub array from the main array(break at a certain point)
console.log()

let sum = 0;
for (let i = 0; i < marks.length; i++){
    console.log(marks[i]);
    sum = sum + marks[i];
}
console.log()
console.log(sum);
console.log()

// Reduce Array Function [Take an array and reduce it to a single value (e.g., sum, product, average)]
let total = marks.reduce((sum, mark) => sum + mark,0); 
console.log(total);
console.log()

// Create a new array with even numbers of scores and multiply each value 
// with 3 and sum them array []
let scores = [12,13,14,16];
var evenScores = [];

for (let i = 0; i<scores.length; i++){
    if (scores[i] % 2 == 0){
        evenScores.push(scores[i]);
        // evenScores.push(scores[i] * 3);
    }
}
console.log(evenScores);
console.log()

// Filter Array Function [Create a new array with only the items that match a condition.]
let newFilterEvenScores = scores.filter(score => score % 2 == 0);
console.log(newFilterEvenScores);
console.log()

// Map Array Function [Transform each element in an array into something else (same length array).]
let mappedArray = newFilterEvenScores.map(score => score * 3)
console.log(mappedArray);
console.log()

let totalMappedArray =mappedArray.reduce((sum, score) => sum + score,0);  // Reduce Array Function is used here
console.log(totalMappedArray);
console.log("Below is the simplified code:")

// Shorter way of writing the above
let scores1 = [12,13,19,16,14];

let result = scores1
.filter(score => score % 2 == 0)
.map(score => score * 3)
.reduce((sum, score) => sum + score,0);
console.log(result);
console.log();

// Sorting of Arrays
console.log("SORTING ARRAYS: ");

let fruits = ["Banana", "Mango", "Pomegrante", "Apple"];
console.log(fruits.sort());  // This method sorts only strings(Sorts in Ascending order)
console.log(fruits.reverse());  // Sorts in descending order
console.log();

// let scores2 = [12,3,19,16,14];
let scores2 = [12,0o3,19,16,14];
console.log(scores2.sort()); // This doesn't sort numbers properly(e.g; when you add a 0o to maybe a number 3 -> 0o3)

scores2.sort(function(a,b){
    return a-b;
});
console.log(scores2)

console.log("Alternatively we can do this: ")
scores2.sort((a,b) => a-b);  // Bubble sort best for sorting numbers in ascending arder
console.log(scores2)