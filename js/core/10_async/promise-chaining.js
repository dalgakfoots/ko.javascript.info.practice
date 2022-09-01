// promise.then 을 호출하면 프라미스가 반환되기 때문에
// 반환된 프라미스에 then 을 호출 할 수 있다.

new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
}).then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 2;
})

// then , catch , finally 의 핸들러가 프라미스를 반환하면
// 나머지 체인은 프라미스가 처리될 때 까지 대기한다.
// 처리가 완료되면 프라미스의 result 가 다음 체인으로 전달된다.


