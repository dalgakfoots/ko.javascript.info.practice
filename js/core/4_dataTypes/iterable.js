// 이터러블 개념을 사용하면 어떤 객체에든 for..of 반복문을 사용할 수 있다.
let range = {
    from : 1,
    to: 5,
    [Symbol.iterator]() { // 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
        this.current = this.from;
        return this; // Symbol.iterator는 이터레이터 객체를 반환합니다.
        // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
    },
    // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
    next() { // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
        if (this.current <= this.to) {
            return {done : false , value: this.current++}
        } else {
            return {done : true}
        }
    }
};


for (let num of range) {
    console.log(num);
}

// 문자열은 이터러블이다.

for (let char of 'test') {
    console.log(char); // t, e, s, t
}

// 이터레이터를 명시적으로 호출하기

let str = 'HelloWorld';

let iterator = str[Symbol.iterator]();

// for..of 와 동일한 동작을 하지만,
// 작업 내부과정 통제가 더 용이함.

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

// 이터러블과 유사배열
// 이터러블 : Symbol.iterator 가 구현된 객체
// 유사배열 : 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체

let arrayLike = {
    0: 'hello',
    1: 'world',
    length: 2,
};

try {
    for (let item of arrayLike) {

    }
} catch (e) { // Symbol.iterator가 없으므로 에러 발생
    console.log('is not iterable');
}

// Array.from : 이터러블이나 유사배열을 받아 진짜 Array 를 만든다.

let fromArrLike = Array.from(arrayLike);
console.log(fromArrLike);

let fromRange = Array.from(range);
console.log(fromRange);

let applyMapFunctionArr = Array.from(range, num => num * num);
console.log(applyMapFunctionArr);