// ?. 을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 접근 가능

// obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
// obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
// obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함

let user = null;
console.log(user?.address); // undefined
console.log(user?.address?.street); // undefined


// 단락평가 : ?. 는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다.
let user1 = null;
let x = 0;

user?.sayHi(x++); // 아무 일도 일어나지 않음.
console.log(x); // 0


// ?.() 와 ?.[]

let user2 = {
    admin() {
        console.log('관리자');
    }
}
let user3 = {};

user2.admin?.(); // 관리자
user3.admin?.(); // 에러없이 아무 일도 일어나지 않음


let user4 = {
    firstName: "Violet",

};
let user5 = null;

let key = 'firstName';

console.log(user4?.[key]); // Violet
console.log(user5?.[key]); // undefined
console.log(user5?.[key]?.something?.not?.exist); //

console.log(user4); // { firstName: 'Violet' }
delete user4?.firstName; // user4 가 존재하면 firstName 을 삭제한다.
console.log(user4); // {}