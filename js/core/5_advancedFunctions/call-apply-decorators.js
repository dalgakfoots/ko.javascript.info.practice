function slow(x) {
    // CPU 집약적인 작업이 여기에 올 수 있습니다.
    console.log(`slow(${x})을/를 호출함`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {    // cache에 해당 키가 있으면
            return cache.get(x); // 대응하는 값을 cache에서 읽어옵니다.
        }

        let result = func(x);  // 그렇지 않은 경우엔 func를 호출하고,

        cache.set(x, result);  // 그 결과를 캐싱(저장)합니다.
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log(slow(1));

// func.call(context , arg1 , arg2)
// this 를 명시적으로 고정한다

function sayHi() {
    console.log(this.name);
}

let user = {name: 'john'};

sayHi.call(user);

// func.call 을 활용한 객체 함수에 데코레이터 적용

let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log(`slow(${x}) 을 호출함`);
        return x * this.someMethod();
    },
};

function caching(func) {
    let cache = new Map();

    return function (x) {
        if(cache.has(x)) {
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

worker.slow = caching(worker.slow);
console.log(worker.slow(2));
console.log(worker.slow(2));

// 여러 인수 전달하기

{
    let worker = {
        slow(min, max) {
            console.log(`slow(${min} , ${max}) 를 호출함`);
            return min + max;
        },
    };

    function cachingDecorator(func, hash) {
        let cache = new Map();

        return function() {
            let key = hash(arguments);
            if (cache.has(key)) {
                return cache.get(key);
            }

            let result = func.call(this, ...arguments);

            cache.set(key, result);
            return result;
        };
    }

    function hash(args) {
        return args[0] + ',' + args[1];
    }

    worker.slow = cachingDecorator(worker.slow, hash);

    console.log(worker.slow(3, 5));
    console.log(worker.slow(3, 5));
}

// func.apply(context , args)
// func 의 this 를 context 로 고정해고, 유사 배열객체인 args 를 인수로 사용할 수 있게 한다.

// func.call(context , ...args);
// func.apply(context , args);
// 둘은 거의 동일한 역할을 한다.

{   // hash() 개선
    // Method borrowing
    function hash() {
        console.log([].join.call(arguments));
    }
}
