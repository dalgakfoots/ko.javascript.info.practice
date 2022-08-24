console.log('Z' > 'A'); // true => 첫글자를 비교한다.
console.log('Glow' > 'Glee'); // true => 글자간 비교가 끝날때까지 과정을 반복
console.log('Bee' > 'Be'); // true

console.log('2' > 1); // true
console.log('01' == 1); // true

console.log(true == 1);
console.log(false == 0);

console.log(false === 0); // false => 피연산자의 자료형이 다름

console.log(null === undefined); // false
console.log(null == undefined); // true

console.log(null > 0); // false => null 의 형변환 일어나지 않음
console.log(null == 0); // false => null 의 형변환 일어나지 않음
console.log(null >= 0); // true => null 의 형변환 일어남 null <--- 0

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false