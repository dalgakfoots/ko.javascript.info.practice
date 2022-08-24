/*content*/

let message = 'hello';
message = 12345; // 변수는 자료형에 관계없이 모든 데이터일 수 있다.

// Numeric
let n = 123;
n = 12.345;

let infi = 1 / 0; // Infinity
console.log(infi);

let isNotNumber = "k123" / 2; // NaN
console.log(isNotNumber);

console.log("\n");

// String

let str = "Hello";
let str2 = 'Single quotes';
let phrase = `${str} World!`;

console.log(phrase);

let calc1 = `1 + 2 is ${1 + 2}`;
console.log(calc1);

console.log("\n");

// Boolean

let checked = true;
let filled = false;

let isGrater = 4 > 1;
console.log(isGrater);

console.log("\n");

// Null

let age = null; // 존재하지 않는 , 비어있는 , 알 수 없는
console.log(age); // null

// undefined

let foo; // 값이 할당되지 않은 상태
console.log(foo); // undefined

console.log("\n");

