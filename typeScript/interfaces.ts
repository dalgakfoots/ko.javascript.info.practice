/************************************************************/

// 타입스크립트의 인터페이스는 타입의 이름을 짓고,
// 코드 안의 계약을 정의한다.
function _printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = {size: 10 , label: 'size 10 obj'}
// 호출하는 함수의 매개변수보다 많은 프로퍼티를 가진 객체지만
// 최소한 필요한 프로퍼티가 있는지 와 타입이 잘 맞는지만 검사한다.
_printLabel(myObj);


// 문자열 타입의 label 프로퍼티 하나를 가지는 것을 의미하는 인터페이스
interface LabeledValue {
    label : string;
}

// 다른 언어처럼 매개변수가 위 인터페이스를 구현해야한다고 명시하는 것은 아니다
// 단지 인터페이스가 요구하는 프로퍼티들이 존재하는지, 프로퍼티가 요구하는 타입을 가졌는지만을 확인한다.
function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

printLabel(myObj);

/************************************************************/

interface SquareConfig {
    color?: string; // 선택적 프로퍼티
    width?: number; // 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서, 사용가능한 속성을 기술한다.
}

function createSquare(config: SquareConfig) : {color :string; area : number} {
    let newSquare = {color : 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: 'black'});

/************************************************************/

interface Point {
    readonly x : number; // 객체가 처음 생성될 때만 수정 가능하다.
    readonly y : number;
}

let p1 : Point = { x: 10 , y: 20}

let a: number[] = [1, 2, 3, 4];
let ro : ReadonlyArray<number> = a; // ReadonlyArray : 모든 변경 메서드가 제거됨. Array<T> 와 동일함

a = ro as number[]; // 재할당은 불가능 하나, 타입 단언으로 오버라이드 하는 것은 가능하다.


/************************************************************/

interface SquareConfig {
    color? : string;
    width? : number;
    [propName : string] : any; // 문자열 인덱스 서명을 추가
    // 추가 프로퍼티가 있음을 확신 한다면 사용 가능
}

let _square = createSquare( {width : 100 , opacity : 0.5} as SquareConfig); // 타입 단언을 통해 초과 프로퍼티 검사를 통과한다.
// 초과 프로퍼티 에러의 대부분은 실제 버그이다.
// 해당 문제가 발생하면 검사를 통과 시키기 보다, 타입 정의를 수정해야 할 필요가 있다.

/************************************************************/

interface SearchFunc {
    (source : string, subString : string) : boolean; // 호출서명
    // 함수선언과 비슷한 형태
}

let mySearch : SearchFunc;
mySearch = function (src, sub) { // 매개변수의 이름이 같을 필요는 없다.
    let result = src.search(sub);
    return result > -1;
}

/************************************************************/

interface StringArray {
    [index : number] : string; // 인덱스 시그니처
    // StringArray 가 number 로 색인화 되면 string 을 반환할 것을 나타낸다.
}

let myArray : StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


interface NumberOrStringDictionary { // Dictionary 패턴으로 사용하고 싶을 경우
    // 모든 프로퍼티들이 반환타입과 일치하도록 강제한다.
    // 하지만 인덱스 시그니처가 프로퍼티 타입들의 합집합이라면 다른 타입의 프로퍼티들도 허용할 수 있다.
    [index: string] : number | string;
    length : number;
    name : string;
}

/************************************************************/

interface ClockInterface {
    // 구현하는 클래스가 특정 계약을 충족시키도록 명시적으로 강제한다.
    currentTime : Date;
    setTime(d: Date) : void;
}

class Clock implements ClockInterface {
    currentTime : Date = new Date ();
    constructor(h:number , m : number) {

    }

    setTime(d: Date) {
        this.currentTime = d;
    }
}

/************************************************************/

interface ClockConstructor { // 생성자 정의
    new (hour : number , minute : number) : _ClockInterface
}

interface _ClockInterface {
    tick() : void;
}

function createClock(ctor : ClockConstructor , hour : number , minute :number) : _ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements _ClockInterface {
    constructor(h: number , m : number) {
    }

    tick() {
        console.log('beep beep');
    }
}

let digital = createClock(DigitalClock, 12, 17);

/************************************************************/

interface Shape {
    color : string;
}

interface PenStroke {
    penWidth : number;
}

interface Square extends Shape , PenStroke { // 인터페이스 확장
    // 인터페이스는 여러 인터페이스를 확장할 수 있다.
    sideLength : number;
}

let square = {} as Square;
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;

/************************************************************/

interface Counter { // 추가적인 프로퍼티와 함께, 함수와 객체 역할 모두 수행하는 객체
    (start : number) : string;
    interval : number;
    reset() : void;
}

function getCounter() : Counter {
    let counter = (function (start : number) {}) as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

/************************************************************/

class Control {
    private state : any;
}

interface SelectableControl extends Control{
    // 인터페이스는 기초클래스의 private 과 protected 멤버도 상속받는다.
    // SelectableControl 을 구현하는 것은 Control 의 자식클래스에게만 가능하다.
    // 이는 Control 의 자식만 같은 선언에서 유래된 state private 멤버 변수를 가질 수 있기 때문이다.

    select() : void;
}

// 아래 클래스는 SelectableControl 의 하위타입이다.

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

let x = new TextBox();