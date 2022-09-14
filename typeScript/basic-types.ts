// boolean

let isDone : boolean = false;

// Number

let decimal : number = 6;
let hex : number = 0xf00d;
let binary : number = 0b1010;
let octal : number = 0o744;

// String

let color: string = "blue";
color = 'red';

let sentence: string = `Look at the ${color} sky`;

// Array

let list: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3];

// Tuple

let x: [string, number];
x = ['hello', 10];


// Enum

enum Color {Red, Green, Blue}

let c: Color = Color.Green;
let colorName: string = Color[2];

// Any : 알지 못하는 타입. 타입 검사를 하지 않는다.

let notSure : any = 4;
notSure = 'maybe a string instead';
notSure = false;

// Void : 어떤 타입도 존재할 수 없음

let unusable : void = undefined;
unusable = null;

// Null and Undefined
// 이밖에 이 변수들에 할당할 수 있는 값은 없다.
let u : undefined = undefined;
let n : null = null;

// Never : 절대 발생할 수 없는 타입

// never 를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message:string) : never {
    throw new Error(message);
}

// 반환 타입이 never 로 추론된다.
function fail() {
    return error('failed');
}

// function infiniteLoop() : never {
//     while (true) {
//
//     }
// }

// Object : 원시타입이 아닌 타입

declare function create(o : object | null) : void;
create({prop: 0});
create(null);

// 타입 단언 : 컴파일러는 개발자가 필요한 특정 검사를 수행했다고 인지한다.

// angle-bracket 문법
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

// as- 문법 => TypeScript 를 JSX 와 사용할 때는 이 스타일만 허용된다.
let nuValue: any = 'this is a string';
let nuLength: number = (someValue as string).length;