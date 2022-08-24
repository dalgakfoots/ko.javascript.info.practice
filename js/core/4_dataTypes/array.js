// 배열 선언

let arr = new Array();
let arr1 = []; // 이 방법이 선호됨

let fruits = ['apple', 'banana'];
console.log(fruits);

let etc = ['apple', {name: 'dgfoot'}, () => console.log('hi?')];

console.log(etc[1].name);
etc[2]();


// 배열 함수들

// 배열 끝을 조작하는 함수
let objects = ['cup', 'mouse', 'keyboard'];
console.log(objects.pop()); // keyboard
console.log(objects); // [ 'cup', 'mouse' ]

objects.push('toothpaste');
console.log(objects); // [ 'cup', 'mouse', 'toothpaste' ]

// 배열 앞을 조작하는 함수

console.log(objects.shift()); // cup
console.log(objects); // [ 'mouse', 'toothpaste' ]

objects.unshift('cup');
console.log(objects); // [ 'cup', 'mouse', 'toothpaste' ]

// 반복문

for (let obj of objects) {
    console.log(obj);
}

for (let key in objects) {
    // for..in 반복문은 배열이 아닌 객체와 함께 사용할 때 최적화 되어 있음.
    // 되도록 for..of 사용
    console.log(objects[key]);
}


// length
let aa = ['a', 'a', 'a'];

aa.length = 2;
console.log(aa); // ['a', 'a']

aa.length = 3;
console.log(aa); // [ 'a', 'a', <1 empty item> ] : 이런 특징을 이용하여 배열을 비울 수 있음.


