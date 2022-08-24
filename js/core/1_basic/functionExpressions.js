// 함수 표현식

let sayHi = function () {
    console.log("Hello");
};

console.log(sayHi); // [Function : sayHi]

let foo = sayHi;

sayHi(); // Hello
foo(); // Hello

// 콜백 함수

function ask(question, yes, no) {
    if (question) yes();
    else no();
}

function sayYes() {
    console.log("YES!");
}

function sayNo() {
    console.log("NO!!");
}

ask(true, sayYes, sayNo); // YES!

ask(false,
    function () {console.log("네!");}, // 익명함수
    function () {console.log("아니오!!");} // 익명함수
); // 아니오!!


// 함수선언문 vs 함수표현식 1
// 함수표현식은 실행흐름이 해당 함수에 도달했을 때, 함수를 생성한다.

console.log(sum(1, 2)); // 3
function sum(a, b) {
    return a + b;
}

try {
    console.log(letSum(1, 2)); // ERROR!!
} catch (e) {
    console.log('ERROR!!');
}
let letSum = function (a, b) {
    return a + b;
};

// 함수선언문 vs 함수표현식 2

let age = 18;

let welcome = (age < 18) ?
    function () {
        console.log("HI");
    } :
    function () {
        console.log("Hello");
    };

welcome(); // Hello
