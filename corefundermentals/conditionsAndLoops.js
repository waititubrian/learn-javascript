
const flag = true;

if (!flag){
    console.log("condition satisfied");
}
else{
    console.log("condition not satisfied");
}
console.log()

// Executes as long as condition remains true
let i = 0;
while (i<10){
    i++;
    console.log(i);
}
console.log()

// Program must be executed at least once, then the condition is checked
let x = 0;
do{
    x++;
}
while(x>10);
    console.log(x);

console.log()

// Used when one knows how many times a loop will be run
for (let y = 0; y <= 10; y++){
    console.log(y);
}
console.log()

// get numbers that are common mutiples of 2 and 5
for (let x =1; x<=100; x++){
    if (x % 2 == 0 && x % 5 == 0){
        console.log(x)
    }
}
console.log();

// get numbers that are common mutiples of 2 or 5
for (let x =1; x<=100; x++){
    if (x % 2 == 0 || x % 5 == 0){
        console.log(x)
    }
}
console.log();


// want first digits only(Use nested if conditions)
let n = 0;
for (let x =1; x<=100; x++){
    if (x % 2 == 0 && x % 5 == 0){
        n++
        console.log(x)
        if (n == 3)
            break;
    }
}