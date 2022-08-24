
/* content */

// to string type

let val = true;
console.log(typeof val); // boolean

val = String(val);
console.log(typeof val); // string


// to number type

val = ("6" / "2");
console.log(typeof val); // number

let str = "123";
console.log(typeof str); // string

let num = Number(str);
console.log(typeof num); // number

let age = Number("abcd");
console.log(age); // NaN

// to boolean type

// 0 , "" , null , undefined , NaN => false
// etc = > true

// (*) "0" , " " => true
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
