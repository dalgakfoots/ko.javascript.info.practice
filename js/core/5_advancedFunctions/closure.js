{
    // 코드블록 안에서 선언한 변수는 블록 안에서만 사용할 수 있다.
    let message = 'hello';
    console.log(message)
}

{
    let message = 'bye';
    console.log(message);
}

// 중첩함수

function sayHiBye(firstName, lastName) {

    function getFullName() {
        return firstName + lastName;
    }

    console.log('hello ', getFullName());
    console.log('bye ', getFullName());
}

sayHiBye('yeonmin', 'kim');



// 변수는 특수내부객체인 환경레코드의 프로퍼티이다.
// 이는 이론상의 객체이다. 따라서 코드를 사용해 직접 렉시컬 환경을 얻거나 조작하는 것은 불가능하다.

// 함수선언문 으로 선언한 함수는 일반 변수와는 달리 렉시컬 환경이 만들어지는 즉시 사용 가능하다.
// 함수표현식은 해당하지 않는다.

let phrase = 'hello';

function say(name) {
    console.log(`${phrase}, ${name}`);
    // 변수에 접근할 땐, 먼저 내부 렉시컬 환경을 검색범위로 잡는다.
    // 찾지 못하면 이후 외부렉시컬 환경으로 확장한다.
    // 이 과정은 검색 범위가 전역 렉시컬 환경으로 확장될 때 까지 반복된다.
    // 찾지못하면 엄격모드에선 에러가 난다.
}


function makeCounter() {
    let count = 0;

    return function () { // 모든 함수는 함수가 생성된 곳의 렉시컬 환경을 기억한다.
        // 함수는 [[Environment]] 라 불리는 숨김 프로퍼티를 가지고 여기에 위를 기억한다.
        // [[Environment]] 는 함수가 생성될 때 딱 한번 값이 세팅되고 영원히 변하지 않는다.
        return count++;
    };
}

let counter = makeCounter();
console.log(counter()); // 변수값 갱신은 변수가 저장된 렉시컬 환경에서 이뤄진다.
console.log(counter()); // 그렇기 때문에 count 변수가 2, 3 으로 증가한다.
console.log(counter());