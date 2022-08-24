// 생성자 함수
// 함수의 이름은 대문자로 시작한다.
// 사용시 new 연산자를 붙여 실행한다.

function User(name) {

    // this = {}; 빈객체가 암시적으로 만들어진다.

    this.name = name;
    this.isAdmin = false;

    // return this; this가 암시적으로 반환된다.
}

let user = new User('ham');
console.log(user);

// new.target 과 생성자 함수

function User1() {
    console.log(new.target);
}

User1(); // undefined
new User();

function User2(name){
    if (!new.target) {
        return new User2(name);
    }
    this.name = name;
}

let foo = User2("foo");
console.log(foo);

// 생성자 내 메서드

function User3(name) {
    this.name = name;

    this.sayHi = function () {
        console.log(`hi my name is ${name}`);
    }
}

let doo = new User3('doo');
doo.sayHi();

/* Exercise */

// 1.new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?

let obj = {};
function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A();
let b = new B();

console.log(a == b); // true;

// 2. 아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.
// read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
// sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
// mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.

let calculator = new Calculator();
calculator.read(1, 2);

console.log(`Sum = ${calculator.sum()}`);
console.log(`Mul = ${calculator.mul()}`);

function Calculator() {
    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

// 3. 생성자 함수 Accumulator(startingValue)를 만들어 보세요.
//
// Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.
//
// 프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
// 메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
// 프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.

let accumulator = new Accumulator(1);
accumulator.read(2);
accumulator.read(3);

console.log(accumulator.value);

function Accumulator(startingValue) {
    this.value = +startingValue;

    this.read = function (num) {
        this.value += +num;
    }
}