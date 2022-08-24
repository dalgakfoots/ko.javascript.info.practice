// ... : 남아있는 매개변수들을 한데 모아 배열에 집어넣어라
function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

console.log(sumAll(1, 2, 3, 5));

// arguments 객체

function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('ham'); // 1 , ham , undefined

// 스프레드 문법

console.log(Math.max(3, 5, 1)); // 5

let arr = [3, 5, 1];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 5 => ...arr 을 사용하면 이터러블 객체 arr 이 인수목록으로 '확장' 된다.

// 이터러블 객체라면 스프레드 문법을 사용할 수 있다.

let str = 'hello';
console.log(...str); // h e l l o

// 배열과 객체의 복사본 만들기

let arr1 = [1, 2, 3];
let arr1Copy = [...arr1]; // 배열을 펼쳐서 각 요소를 분리 후, => 매개변수 목록으로 만든 다음 => 매개변수 목록을 새로운 배열에 할당함

console.log(JSON.stringify(arr1) === JSON.stringify(arr1Copy)); // true
console.log(arr1 === arr1Copy); // false

arr1.push(1);
console.log(arr1); // 1,2,3,1
console.log(arr1Copy); // 1,2,3

let obj = {a: 1 , b : 2 , c: 3};
let objCopy = {...obj}; // 객체를 펼쳐서 각 요소를 분리 후, => 매개변수 목록으로 만든 다음 => 매개변수 목록을 새로운 객체에 할당함

console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
console.log(obj === objCopy); // false

obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

