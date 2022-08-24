let firstName = null;
let secondName = null;
let nickName = 'dgfoot';
// a ?? b : a가 null 도 아니고 undefined 도 아니면 a,
// 그 이외에는 b
console.log(firstName ?? secondName ?? nickName ?? "guest");

// || 와 ?? 의 차이

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
