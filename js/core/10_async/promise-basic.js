let promise = new Promise ( function (resolve , reject) {
    // executor
});

// executor 는 new Promise 가 만들어질 때 '자동으로' '즉각적으로' 실행된다.
// 결과를 최종적으로 만들어내는 제작 코드를 포함한다.

// resolve , 와 reject 는 JS 에서 자체 제공하는 콜백이다.
// 개발자는 이를 신경쓰지 않고 executor 를 작성하면 된다.

// 대신 executor 에서는 결과에 상관없이
// 상황에 따라 인수로 넘겨준 콜백 중 하나를 반드시 호출해야 한다.
// resolve (value) : 일이 성공적으로 끝난 경우, 그 결과를 나타내는 value 와 함께 호출
// reject (value) : 에러 발생 시 에러 객체를 나타내는 error 와 함께 호출

// new Promise 생성자가 반환하는 promise 객체는
// state : 처음엔 pending , resolve 가 호출되면 fulfilled , reject 가 호출되면 rejected
// result : 처음엔 undefined , resolve(value) 가 호출되면 value 로 , reject(error) 가 호출되면 error
// 위의 내부 프로퍼티를 갖는다.


{   // fulfilled promise
    let promise = new Promise( function (resolve, reject) {
        setTimeout(() => resolve('완료'), 1000);
    })
}

{
    let promise = new Promise( function (resolve, reject) {
        // setTimeout(() => reject(new Error("에러")), 1000);
        // reject 의 인수로 어떤 타입도 가능하지만, Error 객체 를 사용하는 것을 추천한다.
    })
}

// Promise 는 성공 또는 실패만 한다.
// 이때 변경된 상태는 더이상 변하지 않는다.



// then

{
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('완료!'), 1000);
    });

    promise.then(
        result => console.log(result), // 1초 후 완료! 를 출력
        error => console.log(error) // 실행되지 않음
    );
}

{
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('에러 발생!')), 1000);
    });

    promise.then(
        result => console.log(result), // 실행되지 않음
        error => console.log(error) // 1초 후 에러 발생
    );
}

{
    // 작업이 성공적으로 처리된 경우만 다루고 싶다면,
    // 인수를 하나만 전달한다.
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('완료!'), 1000);
    });

    promise.then(console.log); // 1초 후 완료! 를 출력
}

// catch

{
    let promise = new Promise( function (resolve, reject) {
        setTimeout(() => reject(new Error("에러")), 1000);
    });

    promise.catch(console.log);
}

// finally

// 프라미스가 처리되면 항상 실행된다.
// 절차를 마무리하는 보편적 동작을 수행한다.

// finally 핸들러는 자동으로 다음 핸들러에 결과와 에러를 전달한다.

{
    new Promise( (resolve, reject) => {
        setTimeout( () => resolve('결과'), 1000)
    }).finally( () => console.log('프라미스가 준비 완료'))
        .then(result => console.log(result));
}

{
    new Promise( (resolve, reject) => {
        setTimeout( () => reject(new Error('에러 발생!!')), 1000)
    }).finally( () => console.log('프라미스가 준비 완료'))
        .catch(err => console.log(err));
}