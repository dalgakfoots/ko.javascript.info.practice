// or 연산자와 피연산자가 여러개인 경우,

console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1

console.log(undefined || null || 0); // 0 => 모두 falsy 이므로, 마지막 값을 반환

// 활용 1.

let firstName = "";
let secondName = "";
let nickName = "violet";

console.log(firstName || secondName || nickName || "익명"); // violet => 첫 번째 truthy 를 얻는다.


// and 연산자와 피연산자가 여러개인 경우,

console.log(1 && 0); // 0 => 첫번째 피연산자가 truthy 면, 두번째 피연산자를 반환한다.
console.log(1 && 5); // 5

console.log(null && 5); // null => 첫번째 피연산자가 falsy 면, 첫번째 피연산자를 반환하고,
console.log(0 && "something"); // 0 두번째 피연산자는 무시한다.

console.log(1 && 2 && null && 3); // null

console.log(1 && 2 && 3); // 3

// !! 을 사용하면 값을 불린형으로 변환할 수 있다.

console.log(!!"non empty string"); // true
console.log(!!null); // false