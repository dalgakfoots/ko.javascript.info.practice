// 프라미스 API

// Promise.all

// 배열 안 프라미스가 모두 처리되면 새로운 프라미스가 이행된다.
// 배열 안 프라미스의 결과값을 담은 배열이 새로운 프라미스의 result 가 된다.

{
    Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000)),
    ]).then(console.log);
}
// 결과 배열의 순서는 Promise.all 에 전달되는 프라미스 순서와 같음
// 전달되는 프라미스 중 하나라도 거부되면, Promise.all 이 반환하는 프라미스는 에러와 함께 바로 거부된다.

// Promise.race
// 가장 먼처 처리되는 프라미스의 결과(혹은 에러) 를 반환한다.

{
    Promise.race([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error('ERROR')), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000)),
    ]).then(console.log);
}

