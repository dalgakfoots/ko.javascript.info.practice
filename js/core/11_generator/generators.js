// 제너레이터(generator)를 사용하면 여러 개의 값을 필요에 따라 하나씩 반환(yield)할 수 있습니다.
// 제너레이터와 이터러블 객체를 함께 사용하면 손쉽게 데이터 스트림을 만들 수 있습니다.

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next();
console.log(JSON.stringify(one)); // {"value":1,"done":false}

let two = generator.next();
console.log(JSON.stringify(two)); // {"value":2,"done":false}

let three = generator.next();
console.log(JSON.stringify(three)) // {"value":3,"done":true}


// 제너레이터와 이터러블

{
    function* _generateSequence() {
        yield 1;
        yield 2;
        yield 3;
    }

    let generator = _generateSequence();

    for (let value of generator) {
        console.log(value); // 1, 2, 3
    }

    let sequence = [0, ..._generateSequence()]; // 제너레이터는 이터러블 객체 이므로 전개문법과 같은 기능이 가능
    console.log(sequence); // [0,1,2,3]
}


{
    let range = {
        from: 1,
        to: 5,

        *[Symbol.iterator]() { // [Symbol.iterator]: function*()를 짧게 줄임
            for(let value = this.from; value <= this.to; value++) {
                yield value;
            }
        }
    };

    console.log([...range]); // [1,2,3,4,5]

}

{
    function* generateSequence(start, end) {
        for (let i = start ; i <= end ; i++) yield i;
    }

    function* generatePasswordCodes() {

        // 0..9
        yield* generateSequence(48, 57); // yield* 지시자는 실행을 다른 제너레이터에게 위임한다.
        // yield* generateSequence 가 제너레이터 generatePasswordCodes 을 대상으로 반복을 수행하고,
        // 산출 값들을 바깥으로 전달한다.

        // A..Z
        yield* generateSequence(65, 90);

        // a..z
        yield* generateSequence(97, 122);

    }

    let str = '';

    for (let code of generatePasswordCodes()) {
        str += String.fromCharCode(code);
    }

    console.log(str);
}


// yield 를 사용해 제너레이터 안 - 밖으로 정보 교환

// yield 는 결과를 바깥으로 전달할 뿐만 아니라, 값을 제너레이터 안으로 전달 할 수 있다.

{
    function* gen() {
        let result = yield "2 + 2 = ?"; // yield 의 값이 외부의 question 으로 들어감. 실행이 잠시 멈춤.
        // result 에 외부에서 호출한 next(4) 의 4 가 들어감.
        console.log(result);
    }

    let generator = gen();
    let question = generator.next().value; // 처음 호출할 땐 인수가 없어야 한다.
    // console.log(question);

    generator.next(4); // 4
}

{
    console.log("------------------------------");
    function* gen() {
        let ask1 = yield "2 + 2 = ?";
        console.log(ask1);
        let ask2 = yield "3 * 3 = ?";
        console.log(ask2);
    }

    let generator = gen();

    console.log(generator.next().value);
    console.log(generator.next(4).value);
    console.log(generator.next(9).done);
}

// generator.throw

{
    console.log("------------------------------");
    function* gen() {
        try {
            let result = yield "2 + 2 = ?"; // (1)

            console.log("위에서 에러가 던져졌기 때문에 실행 흐름은 여기까지 다다르지 못합니다.");
        } catch(e) {
            console.log(e); // 에러 출력
        }
    }

    let generator = gen();

    let question = generator.next().value;

    generator.throw(new Error("데이터베이스에서 답을 찾지 못했습니다.")); // (2)
}

{
    // 외부에서 에러를 잡아도 됨.

    function* generate() {
        let result = yield "2 + 2 = ?"; // Error in this line
    }

    let generator = generate();

    let question = generator.next().value;

    try {
        generator.throw(new Error("데이터베이스에서 답을 찾지 못했습니다."));
    } catch(e) {
        console.log(e); // 에러 출력
    }
}