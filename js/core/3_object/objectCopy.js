let user = {
    name: "john",
};
let admin = user; // 참조에 의한 복사

admin.name = 'Pete';

console.log(user.name); // Pete <- user 참조값을 이용함.

console.log(user == admin); // true
console.log(user === admin); // true

let a = {};
let b = {};
console.log(a == b); //false

// 객체를 복제 1.

let user1 = {
    name : 'dalgakfoot',
    age : 31,
};

let clone = {};
for (let key in user1) {
    clone[key] = user1[key];
}

clone.name = 'ham';

console.log(user1.name);
console.log(clone.name);

// 객체를 복제 2.

let user2 = {name: 'john'}

let permissions1 = {canView: true}
let permissions2 = {canEdit: true}
let newName = {name: 'Pete'}

console.log(user2);
Object.assign(user2, permissions1, permissions2 , newName);
console.log(user2);


let clone1 = Object.assign({}, user2);
console.log(clone1);

// 중첩 객체 복사

let user3 = {
    name: 'john',
    sizes: {
        height: 182,
        width: 50,

    }
};

let clone2 = Object.assign({}, user3);
console.log(user3.sizes === clone2.sizes);
user3.sizes.width++;
console.log(clone2.sizes.width); // 51 <- 다른 객체에서도 변경사항 확인 가능.
// Object.assign 과 같은 얕은 복사는 중첩객체를 처리하지 못한다.
// lodash 의 _.cloneDeep(obj) 등과 같은 깊은복사 가 필요함.

