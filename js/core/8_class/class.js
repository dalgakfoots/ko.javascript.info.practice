// 클래스는 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀로,
// 객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성된다.

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}


{
    let user = new User('john');
    user.sayHi();
}

// js 에서 클래스는 함수의 한 종류이다.

console.log(typeof User); // function

// class User {...} 문법 구조가 진짜 하는 일은 다음과 같습니다.
//
// User라는 이름을 가진 함수를 만듭니다. 함수 본문은 생성자 메서드 constructor에서 가져옵니다.
// 생성자 메서드가 없으면 본문이 비워진 채로 함수가 만들어집니다.
// sayHi같은 클래스 내에서 정의한 메서드를 User.prototype에 저장합니다.

console.log( User === User.prototype.constructor ); // true
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype)); // ['constructor' , 'sayHi']

// 함수를 이용한 객체 생성 방법과의 차이점
// 1. class로 만든 함수엔 특수 내부 프로퍼티인 [[IsClassConstructor]]: true가 이름표처럼 붙습니다.

// 2. 클래스에 정의된 메서드는 열거할 수 없습니다(non-enumerable).
// 클래스의 prototype 프로퍼티에 추가된 메서드의 enumerable 플래그는 false입니다.

// 3. 클래스는 항상 엄격 모드로 실행됩니다(use strict).
// 클래스 생성자 안 코드 전체엔 자동으로 엄격 모드가 적용됩니다.


// 클래스 표현식
{
    let User = class {
        sayHi() {
            console.log('안녕하세요');
        }
    };

    let a = new User();
    a.sayHi();
}

// 동적으로 클래스를 생성

function makeClass(phrase){
    return class {
        sayHi() {
            console.log(phrase);
        };
    };
}

{
    let User = makeClass('안녕하세요?!');

    new User().sayHi();
}

// getter 와 setter

class Temp {

    constructor(name) {
        // setter 를 활성화 한다.
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('이름이 너무 짧습니다.');
            return;
        }
        this._name = value;
    }
}

let temp = new Temp('yeonmin');
console.log(temp.name);

temp = new Temp('');

// 클래스 필드

class Dog {
    name = 'doogie';
}

let dog = new Dog();
console.log(dog.name); // doogie
console.log(Dog.prototype.name); // undefined

// 클래스 필드로 바인딩 된 메서드 만들기

class Button {
    constructor(value) {
        this.value = value;
    }

    _click() {
        console.log(this.value);
    }

    click = () => {
        console.log(this.value);
    }
}

let button = new Button('say Hi~');

setTimeout(button._click, 1000); // undefined => losing this
setTimeout(button.click, 1000); // say Hi~
