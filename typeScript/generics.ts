function _identity (arg : number) : number {
    return arg;
}

// identity 함수에 T라는 타입 변수를 추가했습니다.
// T는 유저가 준 인수의 타입을 캡처하고 (예 - number), 이 정보를 나중에 사용할 수 있게 합니다.
// 여기에서는 T를 반환 타입으로 다시 사용합니다.
// 인수와 반환 타입이 같은 타입을 사용하고 있는 것을 확인할 수 있습니다.
// 이를 통해 타입 정보를 함수의 한쪽에서 다른 한쪽으로 운반할 수 있게끔 합니다.
function identity<T> (arg: T) : T {
    return arg;
}

let _output = identity<string>('myString');
let output = identity('myString');

// 제네릭 타입 변수 작업

function _loggingIdentity<T> (arg: T) : T {
    // console.log(arg.length); => T 에는 length 가 없음.
    return arg;
}

function loggingIdentity<T> (arg : T[]) : T[] {
    console.log(arg.length);
    return arg;
}

// 제네릭 타입

let myIdentity : <T>(arg: T) => T = identity;