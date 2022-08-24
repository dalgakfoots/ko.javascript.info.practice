// 배열 분해하기

let arr = ['kim', 'yeonmin'];
let [firstName , secondName] = arr;

console.log(firstName);
console.log(secondName);

// 두 번째 요소는 필요하지 않음
let [first, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title);

// 우측엔 모든 이터러블이 올 수 있다.
let [a, b, c] = "abc";
console.log(`${a}, ${b}, ${c}`);
let [one, two, three] = new Set([1, 2, 3]);
console.log(`${one} ${two} ${three}`);

// 좌측엔 뭐든지 올 수 있다. 할당할 수 있는 것이라면
let user = {};
[user.firstName, user.secondName] = "Ham Seungwoo".split(' ');
console.log(user);


// entries 로 반복하기

for (let [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}

// 변수 교환 트릭
let guest = 'jane';
let admin = 'pete';

console.log(`before : ${guest} , ${admin}`);
[guest, admin] = [admin, guest];
console.log(`after : ${guest} , ${admin}`);

// ...로 나머지 요소 가져오기

let [name1, name2, ...rest] =  ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(`${name1} , ${name2}`);
console.log(rest);

// 기본값 처리

let [foo = 'let', zoo = '\'s go'] = ["test"];
console.log(foo);
console.log(zoo);

// 객체 분해하기

let options = {
    menu: 'menu',
    width: 100,
    height : 200,
}
// 우측엔 분해하고자 하는 객체를, 좌측엔 객체 프로퍼티의 '패턴'을 넣는다.
let {menu, width, height} = options;

console.log(menu);
console.log(width);
console.log(height);

let option1 = {
    menu: 'menu',
}

let {width:w = 100 , height:h=200 , menu:m} = options;

console.log(w);
console.log(h);
console.log(m);

let cats = {
    vivi : 0,
    vly : 1,
    jini : 2,
    goorm : 3,
}

let {vivi, ...restCats} = cats;

console.log(vivi);
console.log(restCats.jini);

// 중첩 구조 분해

let options2 = {
    size : {
        width: 100,
        height: 200,
    },
    items : ["cake", 'donut'],
    extra : true,
};

let {
    size : {width:wid , height:hei},
    items : [item1, item2],
    title1 = 'menu'
} = options2;

console.log(title);  // Menu
console.log(wid);  // 100
console.log(hei); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

// 매개변수에 사용

let options3 = {
    title: 'my Menu',
    items: ['item1', 'item2'],
};

function showMenu({title = 'Untitled' , width = 200 , height = 100 , items = []} = {}) {
    console.log(`${title} ${width} ${height}`);
    console.log(items);
}

showMenu(options3);
showMenu();

/* exercise */

// 1. 구조분해할당

let john = {
    name : 'john',
    years : 30,
};

// name 프로퍼티의 값을 변수 name에 할당하세요.
// years 프로퍼티의 값을 변수 age에 할당하세요.
// isAdmin 프로퍼티의 값을 변수 isAdmin에 할당하세요. isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.

let {name , years , isAdmin = false} = john;
console.log(name);
console.log(years);
console.log(isAdmin);

// 2. 최대 급여 계산하기

let salaries = {
    'john' : 100,
    'pete' : 300,
    'mary' : 250
}

// 가장 많은 급여를 받는 사람의 이름을 반환해주는 함수 topSalary(salaries)를 만들어봅시다. 조건은 아래와 같습니다.
//
// salaries가 비어있으면 함수는 null을 반환해야 합니다.
// 최대 급여를 받는 사람이 여러 명이라면 그 중 아무나 한 명 반환하면 됩니다.
// 힌트: Object.entries와 구조 분해를 사용해 키-값 쌍을 순회하는 방식을 사용해보세요.

console.log(topSalary(salaries));

function topSalary(salaries) {
    let salariesArr = Object.entries(salaries);
    let top = 0;
    let topSalary = null;
    for([key, value] of salariesArr) {
        if(value >= top) {
            top = value;
            topSalary = key
        }
    }
    return topSalary;
}