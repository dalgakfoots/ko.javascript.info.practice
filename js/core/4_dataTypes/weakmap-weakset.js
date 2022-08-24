// 위크맵을 사용 시, 키로 쓰인 객체가 가비지 컬렉션의 대상이 된다.

let weakMap = new WeakMap();

let obj = {};
weakMap.set(obj, 'ok'); // 키는 반드시 객체여야 한다.

let john = {name: 'john'};
weakMap.set(john, '...!');

john = null; // john 을 나타내는 객체는 이제 메모리에서 지워짐. 키와 매핑된 값 또한 지워진다.

// 위크맵은 반복작업과 keys, values , entries 를 지원하지 않는다.

let visitsCountMap = new WeakMap();

let susy = {name: 'susy'}
countUser(susy);
console.log(visitsCountMap.get(susy)); // 1
susy = null;
console.log(visitsCountMap.get(susy)); // undefined

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

// 유스케이스 : 캐싱

// cache.js

let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        let result = /*do Something*/obj;

        cache.set(obj, result);
    }
    return cache.get(obj);
}

// main.js

let something = {/* ... object ...*/};

let result1 = process(something);
let result2 = process(something);

something = null;

// 위크셋

let visitedSet = new WeakSet();

let ham = {name: 'ham'};
let kim = {name: 'kim'};
let lee = {name: 'lee'};

visitedSet.add(ham).add(kim).add(ham);

console.log(visitedSet.has(ham)); // true
console.log(visitedSet.has(lee)); // false

ham = null;

console.log(visitedSet.has(ham)); // false

/* exercise */

// 1. '읽음'상태인 메시지 저장하기

let messages = [
    {text : 'hello', from:'john'},
    {text : 'how goes?', from:'john'},
    {text : 'see you soon', from:'alice'},
];

let readMessages = new WeakSet();

// 메시지 2개를 읽음 처리
readMessages.add(messages[0]);
readMessages.add(messages[1]);

// 첫번재 메시지를 다시 읽어보기
readMessages.add(messages[0]);

console.log(`message 0 은 읽음 상태? : ${readMessages.has(messages[0])}`);


// 2. 읽은 날짜 저장하기

let readMap = new WeakMap();

readMap.set(messages[0], new Date());
console.log(`메시지를 읽은 시간? : ${readMap.get(messages[0])}`);