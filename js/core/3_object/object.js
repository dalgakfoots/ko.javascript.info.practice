
let user1 = {}; // 객체 리터럴 문법 <-- 주로 사용

let user2 = {
    name: 'john', // 이름 : 값
    age: 30,
    "likes birds" : true, // 띄어쓰기가 들어간 이름은 따옴표로 묶어준다.
    // 마지막 프로퍼티 끝은 쉼표로 끝날 수 있다.
};

console.log(user2.name); // john
console.log(user2.age); // 30

user2.isAdmin = true ; // 객체에 boolean 형 프로퍼티 추가
console.log(user2.isAdmin);

delete user2.age; // 프로퍼티 삭제
console.log(user2.age); // undefined

// 대괄호 표기법

let user3 = {};
user3["likes birds"] = true;
console.log(user3["likes birds"]); // true

let key = "likes birds";
console.log(user3[key]); // true <- 이런 성질을 이용하면 유연하게 코드 작성가능

delete user3["likes birds"];

// 계산된 프로퍼티

let fruit = 'apple';
let bag = { [fruit] : 5,}

console.log(bag.apple); // 5

// 단축 프로퍼티

function makeUser(name, age) {
    return {
        name, age, // 변수를 이용해 프로퍼티를 만드는 경우 사용 가능
    };
}

let madeUser = makeUser('ham', 31);
console.log(madeUser.name); //ham

// in 연산자 사용

let inKey = "age";
console.log(inKey in madeUser); // true

// for...in

for (let key in madeUser) {
    console.log(`key : ${key}`);
    console.log(`value : ${madeUser[key]}`);
}


/* Exercise */

// 1.
// 빈 객체 user를 만듭니다.
// user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
// user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// name의 값을 Pete로 수정해보세요.
// user에서 프로퍼티 name을 삭제하세요.

let user = {};
user["name"] = 'John';
user["surname"] = "Smith";
user.name = 'Pete';

delete user.name;

console.log(user);

// 2.
// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "getup";
console.log(isEmpty(schedule));

function isEmpty(obj) {
    for(let key in obj) {
        if(key) return false;
    }
    return true;
}


// 3.
// 모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요. sum엔 390이 저장되어야겠죠?

let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130,
}

console.log(sum(salaries));

function sum(salaries) {
    let result = 0;
    for (let key in salaries) {
        result += salaries[key];
    }
    return result;
}

// 4.
// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

let menu = {
    width : 200,
    height : 300,
    title: "my menu",

};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}