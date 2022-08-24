let x = 1;
x = -x;

console.log(x); // -1

// exponentiation op
console.log(2 ** 3); // 2 * 2 * 2 = 8
console.log(4 ** (1 / 2)); // 2의 제곱근 = 2

// string connection
let s = 'my ' + 'string';
console.log(s); // my string


// +
console.log(1 + '2'); //12
console.log('1' + 2); //12
console.log(2 + 2 + '1'); //41

// - and /
console.log(6 - '2'); // 4
console.log('6' / '2'); // 3

// + operand to Number type conversion
let number = 1;
console.log(+number); // 1 => 숫자에는 영향을 미치지 않음.

console.log(+true) // 1
console.log(+"") // 0

let apple = '2';
let banana = '3';

console.log(+apple + +banana); // 5


// comma operand

let a = (1 + 2 , 3 + 4); // 7
console.log(a); // 마지막 표현식만 평가됨


/*Exercise*/

let num1 = "1";
let num2 = "2";

let stringNumberToNum = +num1 + +num2;

console.log(typeof stringNumberToNum); // number