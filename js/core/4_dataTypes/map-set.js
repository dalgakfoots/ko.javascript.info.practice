// Map
let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get('1'));
console.log(map.get(1));

// 맵은 map[key] = 2 처럼 사용하는 것이 아님.
// get 과 set 을 사용한다.

// 맵은 키로 객체를 허용한다.
let john = {name: 'john'}

let visitedCountMap = new Map();
visitedCountMap.set(john, 123);

console.log(visitedCountMap.get(john)); // 123

// 맵 요소에 반복 작업하기
// 맵은 삽입 순서를 기억한다.
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);

for (let vagi of recipeMap.keys()) {
    console.log(vagi); // cucumber , tomatoes , onions
}

for (let vagi of recipeMap.values()) {
    console.log(vagi); // 500 , 350 , 50
}

for (let entry of recipeMap) {
    console.log(entry)
}

recipeMap.forEach( (value , key , map) => {
    console.log(`${key} : ${value}`);
})


// Object.entries : 객체를 맵으로 변경

let pete = {
    name : 'pete',
    age : 30,
};

let mapByEntries = new Map(Object.entries(pete));
console.log(mapByEntries.get('name'));

// Object.fromEntries : 맵을 객체로 변경

let prices = new Map();
prices.set('banana', 1)
    .set('orange',2)
    .set('meat',4);

let mapByFromEntries = Object.fromEntries(prices.entries());

console.log(mapByFromEntries);

// set

let set = new Set();

let foo = {name: 'foo'};
let goo = {name: 'goo'};
let zoo = {name: 'zoo'};

set.add(foo);
set.add(goo);
set.add(zoo);
set.add(foo);
set.add(zoo);

console.log(set.size);

for (let elem of set) {
    console.log(elem.name);
}

// set 반복작업하기

let fruits = new Set(['oranges', 'apples', 'bananas']);
for (let value of fruits) console.log(value);

fruits.forEach( (value, valueAgain , set) => {
    console.log(value);
});


/* exercise */

// 1. 배열에서 중복요소 제거하기
// arr은 배열이라 가정합시다.
// arr에서 중복 값을 제거해 주는 함수 unique(arr)를 만들어보세요.

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

function unique(arr) {
    return Array.from(new Set(arr));
}


// 2. 에너그램 걸러내기
// 애너그램으로 만든 단어를 걸러내는 함수 aclean(arr)을 만들어보세요.



let arrNo2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arrNo2));

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

// 3. 반복 가능한 객체의 키

// map.keys()를 사용해 배열을 반환받고,
// 이 배열을 변수에 저장해 .push와 같은 배열 메서드를 적용하고 싶다고 해봅시다.
// 이유가 무엇일까요? keys.push가 작동하게 하려면 어떻게 코드를 고쳐야 할까요?

let test = new Map();
test.set('name', 'john');
let testKeys = test.keys();

let from = Array.from(testKeys);
from.push('more');