// 자바스크립트의 객체는 명세서에서 명명한 [[Prototype]]이라는 숨김 프로퍼티를 갖습니다.
// 이 숨김 프로퍼티 값은 null이거나 다른 객체에 대한 참조가 되는데,
// 다른 객체를 참조하는 경우 참조 대상을 '프로토타입(prototype)'이라 부릅니다.

// [[Prototype]] 프로퍼티는 내부 프로퍼티이면서 숨김 프로퍼티이지만 다양한 방법을 사용해 개발자가 값을 설정할 수 있습니다.
//
// 아래 예시처럼 특별한 이름인 __proto__을 사용하면 값을 설정할 수 있습니다.

{
    let animal = {
        eats : true
    }

    let rabbit = {
        jumps: true,
    };

    rabbit.__proto__ = animal; // __proto__ 는 [[Prototype]] 의 getter / setter 이다.

    console.log(rabbit.eats); // true
    console.log(rabbit.jumps); // true
}

{
    let animal = {
        eats: true,
        walk() {
            console.log('동물이 걷고 있다.');
        },
    };

    let rabbit = {
        __proto__: animal,
        jumps : true,
    };

    rabbit.walk(); // 프로토타입인 animal 의 메서드 walk 를 상속받았다.
}

{
    let animal = {
        eats: true,
        walk() {
            console.log('동물이 걷고 있다.');
        },
    };

    let rabbit = {
        __proto__: animal,
        jumps: true,
    };

    let longEar = {
        __proto__ : rabbit,
        earLength : 10,
    };

    longEar.walk();
    console.log(longEar.jumps);
}

// 프로토타입 체이닝에는 순환참조는 허용되지 않는다.
// __proto__ 의 값은 객체나 null 만 가능하다.
// 객체엔 오직 하나의 [[Prototype]]만 있을 수 있다.

{
    // 프로토타입은 읽기 전용이다.
    let user = {
        name: "John",
        surname: "Smith",

        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        },

        get fullName() {
            return `${this.name} ${this.surname}`;
        }
    };

    let admin = {
        __proto__: user,
        isAdmin: true,
    };

    console.log(admin.fullName); // John Smith

    admin.fullName = "Alice Cooper"; // setter 함수 실행

    console.log(admin.fullName); // Alice Cooper => setter 로 새로 추가된 프로퍼티 값
    console.log(user.fullName); // John Smith => user 에 있었던 프로퍼티 값
}

{
    // this 는 프로토타입에 영향을 받지 않는다.
    // this 는 언제나 . 앞에 있는 개체가 된다.

    let animal = {
        walk () {
            if (!this.isSleeping) {
                console.log('동물이 걸어간다.');
            }
        },
        sleep() {
            this.isSleeping = true;
        }
    };

    let rabbit = {
        __proto__: animal,
        name: 'white',
    };

    rabbit.sleep();

    console.log(rabbit.isSleeping); // true
    console.log(animal.isSleeping); // undefined

    // 메서드는 공유되지만, 객체의 상태는 공유되지 않는다.
}

{
    let animal = {
        eats : true,
    };

    let rabbit = {
        __proto__ : animal,
        jumps : true,
    };

    for (let prop in rabbit) {
        let isOwn = rabbit.hasOwnProperty(prop);

        if (isOwn) {
            console.log(`객체 자신의 프로퍼티 : ${prop}`);
        } else {
            console.log(`상속 프로퍼티 : ${prop}`);
        }
    }

    // 키-값을 순회하는 메서드 대부분은 상속 프로퍼티를 제외하고 동작한다.
}