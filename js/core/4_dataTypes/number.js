// 어림수 구하기

let num = 3.1;

console.log(Math.floor(num)); // 3 : 첫째자리에서 내림
console.log(Math.ceil(num)); // 4 : 첫째자리에서 올림
console.log(Math.round(num)); // 3 : 첫째자리에서 반올림
console.log(Math.trunc(num)); // 3 : 소수부를 무시

//

let num1 = 1.23456; // n 번째 수 기준으로 어림수 구하기
// 2번째 자리까지 남기고 싶은 경우
console.log(Math.floor(num1 * 100) / 100);
console.log(num1.toFixed(2));

// isNaN and isFinite


// isNaN : 인수를 숫자로 변환한 다음 NaN인지 테스트한다.
console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

console.log(NaN === NaN); // false : NaN 은 자기 자신을 포함하여 어떤 값과도 같지 않다.

// isInfinite : 인수를 숫자로 변환한 다음 변환한 숫자가 NaN / Infinity / -Infinity 가 아닌
// 일반 숫자인 경우 true 를 반환한다.

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false , NaN
console.log(isFinite(Infinity)); // false

// 문자열이 일반 숫자인지 검증하는데 사용.
let temp = +"abc";
console.log(isFinite(temp)); // false

// parseInt , parseFloat

let height = '100px';
let width = '12.5em';

console.log(parseInt(height)); // 100
console.log(parseFloat(width)); // 12.5

console.log(parseInt('a123')); // NaN : 앞에서부터 숫자를 읽기 때문에 NaN

