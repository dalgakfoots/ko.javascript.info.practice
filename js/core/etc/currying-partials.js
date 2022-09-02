// 커링은 f(a, b, c)처럼 단일 호출로 처리하는 함수를
// f(a)(b)(c)와 같이 각각의 인수가 호출 가능한 프로세스로 호출된 후 병합되도록 변환하는 것입니다.

function curry(f){
    return function (a) {
        return function (b) {
            return f(a, b);
        }
    }
}

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2));

{
    function curry(func) {
        return function curried(...args) {
            if (args.length >= func.length) {
                return func.apply(this, args);
            } else {
                return function (...args2) {
                    return curried.apply(this, args.concat(args2));
                }
            }
        };
    }

    function sum(a, b, c) {
        return a + b + c;
    }

    let curriedSum = curry(sum);

    console.log(curriedSum(1, 2, 3));
    console.log(curriedSum(1)(2, 3));
    console.log(curriedSum(1)(2)(3));
}