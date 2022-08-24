{
    let user = {
        firstName : 'john',
        sayHi() {
            console.log(`hello , ${this.firstName}`);
        }

    };

    setTimeout(user.sayHi, 1000);
    // == let f = user.sayHi;
    // setTimeout(f, 1000);
    // => user의 컨텍스트를 잃어버림
}

{
    // 해결책 1. 래퍼를 사용

    let user = {
        firstName : 'john',
        sayHi() {
            console.log(`hello , ${this.firstName}`);
        }

    };

    setTimeout(function () {
        user.sayHi(); // 외부 렉시컬 환경에서 user 를 받아왔기 때문에 의도대로 동작한다.
    }, 1000);

    // == setTimeout( () => user.sayHi() , 1000);

    //이 경우 setTimeout 이 트리거 되기전에 user 가 변경되면 변경된 객체의 메서드를 호출하게 된다.

    user = {sayHi () {console.log('또다른 사용자');}}
}

{
    // 해결책 2. bind 를 사용

    let user =  {
        firstName : 'john',
    };

    function func() {
        console.log(this.firstName);
    }

    let funcUser = func.bind(user);
    funcUser();
}

{
    let user = {
        firstName : 'john',
        sayHi() {
            console.log(`hello , ${this.firstName}`);
        }
    };

    let sayHi = user.sayHi.bind(user);

    sayHi();
    setTimeout(sayHi, 1000);

    user = {
        sayHi() {
            console.log('또다른 사용자');
        }
    };
}

{
    // 부분적용

    // bind 를 통해 인수도 바인딩할 수 있다.

    function mul(a, b) {
        return a*b;
    }

    let double = mul.bind(null, 2);
    console.log(double(3)); // 6
    console.log(double(4)); // 8
    console.log(double(5)); // 10

    // 가독성이 좋은 이름(double, triple)을 가진 독립 함수를 만들 수 있다는 이점 때문입니다.
    // 게다가 bind를 사용해 첫 번째 인수를 고정할 수 있기 때문에 매번 인수를 전달할 필요도 없어지죠.

}

{
    // 컨텍스트 없는 부분 적용

    function partial(func, ...argsBound) {
        return function (...args) {
            return func.call(this, ...argsBound, ...args);
        };
    }

    let user = {
        firstName: "John",
        say(time, phrase) {
            console.log(`[${time}] ${this.firstName}: ${phrase}!`);
        }
    };

    user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
    user.sayNow("Hello");
}