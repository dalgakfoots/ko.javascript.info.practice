// 숫자 열거형
enum _Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// 문자 열거형
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

// 유니언 열거형 과 열거형 멤버 타입

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind : ShapeKind.Circle;
    radius : number;
}

interface Square {
    kind : ShapeKind.Square;
    sideLength : number;
}

let c : Circle = {
    kind : ShapeKind.Circle,
    radius : 100
};

enum _E {
    Foo,
    Bar,
}

function _f(x: _E) {

}

// 런타임에서 열거형

enum E {
    X, Y, Z,
}

function f(obj: { X: number }) {
    return obj.X;
}

f(E);

// 컴파일시점에서 열거형

enum LogLevel {
    ERROR , WARN , INFO, DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel; // == type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';

function printImportant(key: LogLevelStrings, message : string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}

printImportant('ERROR', 'This is message');

// 역매핑

enum _Enum {
    A
}

let a = _Enum.A;
let nameOfA = _Enum[a]; // 'A'
// 문자열 열거형은 역매핑을 생성하지 않는다

// const 열거형

const enum Enum {
    A = 1,
    B = A * 2,
}