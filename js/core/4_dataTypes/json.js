let student = {
    name : 'john',
    age : 30,
    isAdmin : false,
    courses: ['html', 'css', 'js'],
    friend : { name : 'kim' , age : 30},
    wife : null,
    sayHi() {
        console.log('hello');
    },
    [Symbol('id')]: 123,
    something: undefined,
};

// JSON.stringify : 객체를 JSON 으로 바꿔준다.

let json = JSON.stringify(student);
console.log(typeof json); // string
console.log(json); // {"name":"john","age":30,"isAdmin":false,"courses":["html","css","js"],"friend":{"name":"kim","age":30},"wife":null}

// 함수 프로퍼티 , 심볼형 프로퍼티 , 값이 undefined 인 프로퍼티는 무시된다.

// replacer 로 원하는 프로퍼티만 직렬화하기

let room = {
    number : 23
};

let meetup = {
    title: 'conference',
    participants : [ {name: 'john'} , {name:'alice'}],
    place : room
};

room.occupiedBy = meetup;

// JSON.stringify(value, replacer)
console.log( JSON.stringify(meetup , ['title' , 'participants']) ); // {"title":"conference","participants":[{},{}]}

console.log( JSON.stringify(meetup , ['title' , 'participants' , 'place' , 'name' , 'number']) ); // {"title":"conference","participants":[{"name":"john"},{"name":"alice"}],"place":{"number":23}}

console.log( JSON.stringify(
    meetup,
    (key , value) => {
        console.log(`${key} : ${value}`);
        return (key === 'occupiedBy') ? undefined : value;
    }
));

// JSON.stringify(value, replacer , space)
console.log(JSON.stringify(meetup, ['title' , 'participants' , 'place' , 'name' , 'number'], 2));


// JSON.parse

// let value = JSON.parse(str, [reviver])
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);
console.log(user);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let strToObject = JSON.parse(str, (key, value) => {
    if (key === 'date') return new Date(value);
    return value;
});

console.log(strToObject.date);

/* exercise */

// 1. 객체를 JSON 으로 바꾼 후 다시 객체로 바꾸기

console.log(`\n #1`)

let john = {
    name: 'john Smith',
    age : 30
};

let parse = JSON.parse(JSON.stringify(john));
console.log(parse);

// 2. 역참조 배제하기

// 순환 참조가 있는 경우 프로퍼티 이름을 사용해 순환 참조를 만드는 프로퍼티를 직렬화에서 배제할 수 있습니다.
// 그런데 이 프로퍼티가 순환참조도 만들면서 일반 프로퍼티 역할을 하는 경우라면 단순히 이런 식으로 직렬화에서 배제할 수 없습니다.
// 이럴 땐 값을 이용해 해당 프로퍼티를 확인할 수밖에 없습니다.
// meetup을 참조하는 프로퍼티를 제외한 모든 프로퍼티를 직렬화해주는 replacer 함수를 작성해보세요.

let room1 = {
    number : 23
};

let meetup1 = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room1
}

room1.occupiedBy = meetup1;
meetup1.self = meetup1;

console.log( JSON.stringify(meetup1, function replacer(key, value) {
    return (key !== "" && value === meetup1) ? undefined : value;
}));