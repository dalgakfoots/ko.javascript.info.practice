class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

// 커스텀 에러

class ValidationError extends MyError {
    constructor(message) {
        super(message); // 자식생성자에서 super 를 반드시 호출해야 한다.
    }
}

// 더 깊게 상속

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super('No property : '+ property);
        this.property = property;
    }
}

// 사용법

function readUser(json) {

    let user = JSON.parse(json);

    if (!user.age) {
        throw new PropertyRequiredError('age');
    }
    if (!user.name) {
        throw new PropertyRequiredError('name');
    }

    return user;
}

try {
    let user = readUser('{"age" : 25}');
} catch (e) {
    if (e instanceof ValidationError) {
        console.log("Invalid data: " + e.message); // Invalid data: No property: name
        console.log(e.name); // PropertyRequiredError
        console.log(e.property); // name
    } else if (e instanceof SyntaxError) {
        console.error('JSON Syntax Error : ' + e.message);
    } else {
        throw e;
    }
}

// 예외 감싸기
{
    class ReadError extends Error {
        constructor(message, cause) {
            super(message);
            this.cause = cause;
            this.name = 'ReadError';
        }
    }

    class ValidationError extends Error { /*...*/ }
    class PropertyRequiredError extends ValidationError { /* ... */ }

    function validateUser(user) {
        if (!user.age) {
            throw new PropertyRequiredError("age");
        }

        if (!user.name) {
            throw new PropertyRequiredError("name");
        }
    }

    function readUser(json) {
        let user;

        try {
            user = JSON.parse(json);
        } catch (err) {
            if (err instanceof SyntaxError) {
                throw new ReadError("Syntax Error", err);
            } else {
                throw err;
            }
        }

        try {
            validateUser(user);
        } catch (err) {
            if (err instanceof ValidationError) {
                throw new ReadError("Validation Error", err);
            } else {
                throw err;
            }
        }

    }

    try {
        readUser('{잘못된 형식의 json}');
    } catch (e) {
        if (e instanceof ReadError) {
            console.log(e);
            // Original error: SyntaxError: Unexpected token b in JSON at position 1
            console.log("Original error: " + e.cause);
        } else {
            throw e;
        }
    }

    // 이제 readUser는 위에서 설명한 것처럼 동작합니다. Syntax 에러나 Validation 에러가 발생한 경우 해당 에러 자체를 다시 던지기 하지 않고 ReadError를 던지게 됩니다.
    //
    // 이렇게 되면, readUser를 호출하는 바깥 코드에선 instanceof ReadError 딱 하나만 확인하면 됩니다. 에러 처리 분기문을 여러 개 만들 필요가 없어집니다.
    //
    // '예외 감싸기’란 이름은 종류별 에러를 좀 더 추상적인 에러, ReadError에 하나로 모아(wrap) 처리하기 때문에 붙여졌습니다. 이런 기법은 객체 지향 프로그래밍에서 널리 쓰이는 패턴입니다.
}