// instanceof 연산자를 통해 객체가 특정 클래스에 속하는지 확인할 수 있음

// obj instanceof Class

{
    class Rabbit {}
    let rabbit = new Rabbit();

    console.log(rabbit instanceof Rabbit); // true
}

{
    function Rabbit() {} // 생성자함수
    let _rabbit = new Rabbit();

    console.log(_rabbit instanceof Rabbit); // true
}

// 클래스에 정적 메서드 Symbol.hasInstance가 구현되어 있으면,
// obj instanceof Class문이 실행될 때, Class[Symbol.hasInstance](obj)가 호출됩니다.
// 호출 결과는 true나 false이어야 합니다. 이런 규칙을 기반으로 instanceof의 동작을 커스터마이징 할 수 있습니다.

class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}

let obj = {canEat: true};

console.log(obj instanceof Animal); // true

// 그런데, 대부분의 클래스엔 Symbol.hasInstance가 구현되어있지 않습니다.
// 이럴 땐 일반적인 로직이 사용됩니다.
// obj instanceOf Class는 Class.prototype이 obj 프로토타입 체인 상의 프로토타입 중 하나와 일치하는지 확인합니다.

