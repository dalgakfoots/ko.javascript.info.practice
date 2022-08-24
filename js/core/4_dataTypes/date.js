// 객체 생성


// new Date() : 현재 날짜와 시간이 저장된 Date 객체가 반환된다.
let now = new Date();
console.log(now);
console.log(typeof now); // object

// new Date(milliseconds) : 1970/1/1 0:0:0 에서 milliseconds 밀리초 후의 시점이 저장된 Date 객체가 반환
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000); // 1970/1/1 기준으로 24시간 후
console.log(Jan02_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000); // 19701/1/ 기준으로 24시간 전
console.log(Dec31_1969)

// new Date(datestring)
let date = new Date("2022-08-09");
console.log(date);

// new Date (year, month , date, hours , minutes , seconds , ms)
// year 는 4자리 숫자여야 한다.
// month 는 0~11 사이의 숫자이다.
// date 는 일을 나타내는데, 값이 없으면 1일로 처리된다.
// hours/minutes/seconds/ms에 값이 없는 경우엔 0으로 처리된다.

let date1 = new Date(2011, 0, 1, 0, 0, 0, 0);
let date2 = new Date(2011, 0, 1);
console.log(date1);
console.log(date2);

// 날짜 구성요소 얻기. getXxx();
let date3 = new Date();

// 현재 시간 기준 시
console.log(date3.getHours());

// 날짜 구성요소 설정하기. setXxx();
let today = new Date();

today.setHours(0);
console.log(today);

// 자동 고침

let date4 = new Date(2013, 0, 33);
console.log(date4);

let date5 = new Date(2016, 1, 28);
console.log(`before date5 : ${date5}`);
date5.setDate(date5.getDate() + 2);
console.log(`after date5 : ${date5}`);

// 시간차 측정하기

let date6 = new Date();

for (let i = 0; i < 1000000; i++) {
    let doSomething = i * i * i;
}

let end = new Date();

console.log(` ${end - date6} 밀리초 소요`);

// Date.now() : 중간에 Date 객체를 만들지 않아 성능상 더 좋음.

let start = Date.now();

for (let i = 0; i < 1000000; i++) {
    let doSomething = i * i * i;
}

let end1 = Date.now();

console.log(` ${end1 - start} 밀리초 소요`);

// 벤치마크 테스트
function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0 ; i < 1000000 ; i++) f(date1, date2);
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;
//
// bench(diffSubtract); // 예열용
// bench(diffGetTime); // 예열용
//
// for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
// }
//
// console.log(` diffSubtract : ${time1}`);
// console.log(` diffGetTime : ${time2}`);

// Date.parse(str)
// 문자열의 형식은 YYYY-MM-DDTHH:mm:ss.sssZ처럼 생겨야 합니다.
// YYYY-MM-DD : 연월일
// T : 구분기호
// HH:mm:ss.sss : 시분초밀리초
// Z : (옵션) +-hh:mm 형식의 시간대를 나타냄

let ms = Date.parse('2022-08-09T09:44:14.000Z');
console.log(ms);
let date7 = new Date(ms);
console.log(date7);

/* exercise */

// 1. 날짜 생성하기
// 2012년 2월 20일, 오전 3시 12분을 나타내는 Date 객체를 만들어보세요(시간대는 로컬).
console.log('\n #1');
let date8 = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log(`${date8}`);

// 2. 요일 보여주기
// 날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.

console.log('\n #2')
console.log(getWeekDay(new Date()));

function getWeekDay(date) {
    // let day = date.getDay();
    // switch (day) {
    //     case 1 :
    //         return 'MO';
    //     case 2:
    //         return 'TU';
    //     case 3:
    //         return 'WE';
    //     case 4:
    //         return 'TH';
    //     case 5:
    //         return 'FR';
    //     case 6:
    //         return 'SA';
    //     case 0:
    //         return 'SU';
    // }
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

// 3. n 일전 '일' 출력하기

// date를 기준으로 days일 전 '일’을 반환하는 함수 getDateAgo(date, days)를 만들어보세요,
// 오늘이 20일이라면 getDateAgo(new Date(), 1)는 19를, getDateAgo(new Date(), 2)는 18을 반환해야 합니다.
// days가 365일 때도 제대로 동작해야 합니다.
console.log('\n #3')

let date9 = new Date();

console.log(getDateAgo(date9, 1));

function getDateAgo(date, ago) {
    let temp = new Date(date);
    temp.setDate(temp.getDate() - ago);
    return temp.getDate();
}

// 4. 달의 마지막 일

// 특정 달의 마지막 일을 반환하는 함수 getLastDayOfMonth(year, month)를 작성해보세요. 반환 값은 30이나 31, 29(2월), 28(2월)이 될 겁니다.


console.log('\n #4')
console.log(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month+1 , 0); // 0을 넘기면 첫번째 일의 1일전을 의미한다.
    return date.getDate();
}

// 5. 몇초나 지났을까
// 오늘 하루가 시작된 이후 몇 초나 지났는지 반환하는 함수 getSecondsToday()를 만들어보세요.

console.log('\n #5');

console.log(getSecondsToday());

function getSecondsToday() {
    let dateNow = new Date();
    let zeroDay = new Date(dateNow.getFullYear() , dateNow.getMonth() , dateNow.getDate());

    let diff = dateNow - zeroDay;
    return Math.round(diff / 1000);
}

// 6. 몇초나 남았을까
// 오늘 하루가 끝날 때까지 남은 초를 반환해주는 함수 getSecondsToTomorrow()를 만들어보세요.

console.log('\n #6');

console.log(getSecondsToTomorrow());

function getSecondsToTomorrow() {
    let dateNow = new Date();
    let nextDay = new Date(dateNow.getFullYear() , dateNow.getMonth() , dateNow.getDate() + 1);

    let diff = nextDay - dateNow;
    return Math.round(diff / 1000);
}