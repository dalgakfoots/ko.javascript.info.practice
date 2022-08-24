//arr.splice
let arr = ['I', 'Go', 'Home'];
arr.splice(1, 1); // 인덱스 1부터 요소 1개 제거

console.log(arr); // ['I' , 'Home']

let foo = ["I", "study", "JavaScript", "right", "now"];
foo.splice(0, 3, "Let's", 'dance'); // 인덱스 0부터 3개를 지우고, 다른 요소로 대체한다.

console.log(foo); // [ "Let's", 'dance', 'right', 'now' ]

foo = ["I", "study", "JavaScript", "right", "now"];
let removed = foo.splice(0, 2); // 삭제된 요소로 구성된 배열을 반환한다.
console.log(removed); // [ 'I', 'study' ]

let goo = ['I', 'Study', 'Javascript'];
goo.splice(2, 0, 'Complex', 'Language');
console.log(goo); // [ 'I', 'Study', 'Complex', 'Language', 'Javascript' ]

// arr.slice : 기존 배열을 건드리지 않고 배열을 조작
let zoo = ['t', 'e', 's', 't'];
console.log(zoo.slice(1, 3)); // 인덱스 1부터 3까지 복사 (3은 포함 안됨)
console.log(zoo.slice(-2)); // -2번째 부터 끝까지 복사

// arr.concat 기존 배열의 요소를 사용해 새로운 배열을 만들거나, 기존 배열에 요소를 추가할 때 사용

let poo = [1, 2];
console.log(poo.concat([3, 4])); // [1,2,3,4]
console.log(poo.concat([3, 4], [5, 6])); // [ 1,2,3,4,5,6]

let arrayLike = {
    0: "something",
    length: 1,
};

let arrayLike1 = {
    0: "something",
    1: "new",
    [Symbol.isConcatSpreadable]: true, // 이 있으면 concat은 이 객체를 배열로 취급한다.
    length: 2,
};

console.log(poo.concat(arrayLike, arrayLike1)); // [ 1, 2, { '0': 'something', length: 1 }, 'something', 'new' ]

// arr.forEach()

["kim", "yeon", "min"].forEach(console.log); // (item , index , array)

["kim", "yeon", "min"].forEach((value, index, array) => {
    console.log(`${value} is at index ${index} in ${array}`);
})

// 배열 탐색

let kimYeonMin = [1, 0, false];

// 완전 항등 비교 === 를 사용한다.
console.log(kimYeonMin.indexOf(0)); // 1
console.log(kimYeonMin.indexOf(false)); // 2
console.log(kimYeonMin.indexOf(null)); // -1

console.log(kimYeonMin.includes(1)); // true

// find

let users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'pete'},
    {id: 3, name: 'mary'}
];

let user = users.find((item) => item.id === 1); // { id: 1, name: 'john' }
console.log(user); // 못찾으면 undefined

// filter

let someUsers = users.filter(item => item.id < 3); // [ { id: 1, name: 'john' }, { id: 2, name: 'pete' } ]
console.log(someUsers); // 못찾으면 빈 배열

// arr.map : 배열 요소 전체를 대상으로 함수를 호출하고, 호출 결과를 배열로 반환한다.

let numbers = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(numbers); // [5,7,6]

// arr.sort : 배열 요소를 정렬한다.

let noo = [1, 2, 15];
noo.sort();
console.log(noo); // [1,15,2] -> 요소는 문자열로 취급되어 재정렬되기 때문에
// sort 함수에 새로운 함수를 넘겨줘야 한다.

function compare(a, b) {
    if (a > b) return 1; // 첫번째 값이 두번째 값보다 큰경우
    if (a == b) return 0; // 같은 경우
    if (a < b) return -1; // 첫번째 값이 두번째 값보다 작은 경우
}

noo.sort(compare);
console.log(noo); // [1,2,15]

let coo = [1, 2, 15];
coo.sort((a, b) => a - b);
console.log(coo); // [1,2,15]

// reverse : 역순정렬
let xoo = [1, 2, 3, 4, 5];
xoo.reverse();
console.log(xoo); // [5,4,3,2,1]

// split , join

let names = 'Bilbo, Gandalf, Nazgul';

let splitArr = names.split(', ', 2); // 두번째 인수는 배열의 길이를 제한해준다.
console.log(splitArr); // ['Bilbo' , 'Gandalf']

let testStr = 'test';
console.log(testStr.split('')); // t,e,s,t

let joinStr = splitArr.join(', ');
console.log(joinStr); // Bilbo, Gandalf

// reduce

/*
let value  = arr.reduce( function (accumulator, item, index, array) {
    ...
} , [initial]);

accumulator : 이전 함수 호출의 결과 , [initial] 은 함수 최초 호출 시 사용되는 초기값
item : 현재 배열 요소
index : 현재 인덱스
array : 배열

* */

let reduceArr = [1, 2, 3, 4, 5];

let result = reduceArr.reduce(
    (sum, current) => sum + current, 0);

console.log(result); // 15

// isArray
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// thisArg : find , filter , map 에서 매개변수를 옵션으로 받을 수 있음.
// thisArg 는 func 의 this 가 된다.

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge; // thisArg를 쓰지 않으면 이곳의 this가 undefined가 된다.
    }
};

let armyUsers = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
]

let soldiers = armyUsers.filter(army.canJoin, army);
console.log(soldiers);

/* exercise */

// 1. "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.
// 힌트: split을 사용해 문자열을 배열로 바꾼 다음 join을 사용해 다시 합치면 됩니다.
console.log('\n #1');
console.log(camelize('background-color'));

// function camelize(str) {
//     let tempArr = [];
//     let splitted = str.split('-');
//     splitted.forEach( (item, index) => {
//         if(index > 0) {
//             let upperCase = item[0].toUpperCase() + item.slice(1);
//             tempArr.push(upperCase);
//         } else {
//             tempArr.push(item);
//         }
//     });
//
//     return tempArr.join('');
// }

function camelize(str) {
    return str.split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        ).join('');
}

// 2. 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고,
// 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
console.log(`\n #2`)
console.log(filterRange([5, 3, 8, 1], 1, 4));

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}

// 3. 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요.
//  배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

console.log(`\n #3`);
let test3 = [5, 3, 8, 1];
filterRangeInPlace(test3, 1, 4);
console.log(test3);

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {

        } else {
            arr.splice(i, 1);
            i--;
        }
    }
}

// 4. 내림차순으로 정렬하기
console.log(`\n #4`);
let four = [5, 2, 1, -10, 8];

four.sort((a, b) => b - a);
console.log(four);

// 5. 배열 복사본을 정렬하기
// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.
// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.

console.log(`\n #5`);
let web = ['HTML', 'Javascript', 'CSS'];

let sorted = copySorted(web);

console.log(sorted);
console.log(web);

// function copySorted(arr) {
//     let temp = [...arr];
//     return temp.sort();
// }

function copySorted(arr) {
    return arr.slice().sort();
}

// 6. 확장 가능한 계산기

//기능을 "확장"할 수 있는 계산기 객체를 만들어 주는 생성자 함수 Calculator를 작성해봅시다.
// Calculator는 두 단계를 거쳐 만들 수 있습니다.
// 첫 번째 단계는 "1 + 2"와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 바꿔주는 메서드 calculate(str)를 구현하는 것입니다.
// 이 함수는 +와 -를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.

// 두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 addMethod(name, func)를 추가해 주는 것입니다.
// 연산자 이름을 나타내는 name과 인수가 두개인 익명 함수 func(a,b)를 받는 새 메서드를 구현해야 하죠.

console.log('\n #6');

let powerCalc = new Calculator();

powerCalc.addMethod("**", (a, b) => a ** b);

let resultNo6 = powerCalc.calculate("2 ** 3");
console.log(resultNo6);


function Calculator() {
    this.methods = [];

    this.calculate = function (str) {
        let preprocess = str.split(' ');
        this.a = +preprocess[0];
        let operator = preprocess[1];
        this.b = +preprocess[2];

        let index = this.methods.findIndex(value => value.op === operator);
        return this.methods[index].func(this.a, this.b);
    }

    this.addMethod = function (operator, func) {
        this.methods.push(
            {op: operator, func: func}
        );
    }
}

// 7. 이름 매핑하기
// name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.
console.log(`\n #7`);
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let usersNo7 = [john, pete, mary];

let namesNo7 = usersNo7.map(item => item.name);
console.log(namesNo7);

// 8. 객체 매핑하기
// 세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있습니다.
// name과 surname을 조합해 fullName을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.

console.log(`\n #8`);
let john1 = {name: "John", surname: "Smith", id: 1};
let pete1 = {name: "Pete", surname: "Hunt", id: 2};
let mary1 = {name: "Mary", surname: "Key", id: 3};

let usersNo8 = [john1, pete1, mary1];

let usersMapped = usersNo8.map((item) => {
    return {fullName: `${item.name} ${item.surname}`, id: 1}
});

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

// 9. 나이를 기준으로 객체 정렬하기
// 프로퍼티 age가 있는 객체가 담긴 배열이 있습니다.
// 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.
console.log(`\n #9`);

let john2 = {name: "John", age: 25};
let pete2 = {name: "Pete", age: 30};
let mary2 = {name: "Mary", age: 28};
let usersNo9 = [john2, pete2, mary2];
sortByAge(usersNo9);

console.log(usersNo9);

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);

}

// 10. 배열요소 무작위로 섞기
// 배열의 요소를 무작위로 섞어주는 함수 shuffle(array)을 작성해 보세요.
// shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 합니다.

console.log('\n #10');

let arrNo10 = [1, 2, 3];
shuffle(arrNo10);
console.log(arrNo10);

function shuffle(arr) { // fisher - yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// 11. 평균 나이 구하기

console.log('\n #11');

let john3 = {name: "John", age: 25};
let pete3 = {name: "Pete", age: 30};
let mary3 = {name: "Mary", age: 29};

let arrNo11 = [john3, pete3, mary3];
let averageAge = getAverageAge(arrNo11);
console.log(averageAge)

function getAverageAge(arr) {
    return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
}

// 12. 중복 없는 요소 찾아내기
// arr은 배열입니다.
// 배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성해보세요.

console.log('\n #12');

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O

function unique(arr) {
    let result = [];
    arr.forEach((item) => {
        if(result.indexOf(item) === -1) result.push(item);
    });
    return result;
}

// 13. Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

console.log('\n #13');
let usersNo13 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(usersNo13);
console.log(usersById);

function groupById(arr) {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
}