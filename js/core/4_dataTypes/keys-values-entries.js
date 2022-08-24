let user = {
    name : 'violet',
    age: 30,
};
// Object.* 을 사용하면 iterable 객체가 아닌, 배열을 반환한다.
for (let value of Object.values(user)) {
    console.log(value);
}

// 객체 변환하기

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices);

/* exercise */

// 1. 급여 정보가 저장되어있는 객체 salaries가 있습니다.
// Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어보세요.
// salaries가 빈 객체라면, 0이 반환되어야 합니다.

let salaries = {
    'john' : 100,
    'pete' : 300,
    'mary' : 250,
};

console.log(sumSalaries(salaries));

function sumSalaries(obj) {
    let result = 0;
    for(let salary of Object.values(obj)) {
        result += +salary;
    }
    return result;
}

// 2. 객체 프로퍼티 개수를 반환하는 함수 count(obj)를 만들어보세요.
// 가능한 짧게 코드를 작성해 보세요.
// 주의: 심볼형 프로퍼티는 무시하고 ‘일반’ 프로퍼티 개수만 세주세요.

let john = {
    name : 'john',
    age: 30,
};

console.log(count(john));

function count(obj) {
    let entries = Object.entries(obj);
    return entries.length;
}