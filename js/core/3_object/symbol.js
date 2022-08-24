// js 의 객체 프로퍼티 키는 문자형과 심볼형만을 허용한다.

let id = Symbol("id");
let id1 = Symbol("id");

console.log(id == id1); // false <- 심볼은 유일성이 보장된다.

console.log(id.description); // id

// 숨김 프로퍼티

let user = {
    name: 'john',
};

user[id] = 1;
console.log(user[id]);



let user1 = {
    name: 'Pete',
    [id]: 123,
    age: 30,
};

for (let key in user1) {
    console.log(key); // 키가 심볼인 경우 배제된다.
}

// 전역 심볼

// 전역 레지스트리에서 심볼을 읽는다.
let pwd = Symbol.for("pwd"); // 심볼이 존재하지 않으면 새로운 심볼을 만든다.
let pwdAgain = Symbol.for("pwd");

console.log(pwd === pwdAgain); // true

// Symbol.keyFor

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id


