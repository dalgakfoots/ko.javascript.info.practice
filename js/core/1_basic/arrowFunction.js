let sum = (a,b) => a + b;
console.log(sum(1, 2));

let age = 16;
let welcome = (age > 18) ? () => console.log('hi') : () => console.log('hello');
welcome();

let sub = (a, b) => {
    let result = a - b;
    return result;
};
console.log(sub(2, 1));
