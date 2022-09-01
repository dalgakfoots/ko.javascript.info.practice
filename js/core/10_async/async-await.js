// function 앞에 async 를 붙이면 해당 함수는 항상 프라미스를 반환한다.
// 프라미스가 아닌 값을 반환하더라도, 이행상태의 프라미스로 값을 감싸
// 이행된 프라미스가 반환되도록 한다.

async function f () {
    return 1;
}

f().then(console.log); // 1

// await

{
    async function foo() {

        let promise = new Promise( (resolve, reject) => {
            setTimeout(() => resolve('완료'), 1000);
        });

        let result = await promise; // 프라미스가 처리될 때 까지 함수 실행을 기다리게 만든다.
        // 프라미스가 처리되면 그 결과와 함께 실행이 재개된다.
        console.log(result);
    }

    foo()
        .catch(console.log);
}

// async/await을 사용하면 await가 대기를 처리해주기 때문에 .then이 거의 필요하지 않습니다.
// 여기에 더하여 .catch 대신 일반 try..catch를 사용할 수 있다는 장점도 생깁니다.
// 항상 그러한 것은 아니지만, promise.then을 사용하는 것보다 async/await를 사용하는 것이 대개는 더 편리합니다.