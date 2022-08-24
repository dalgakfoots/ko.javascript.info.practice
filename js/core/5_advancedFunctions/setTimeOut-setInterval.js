// 일정 시간이 지난 후에 원하는 함수를 예약 실행(호출) 할 수 있게 하는 것을
// 호출 스케쥴링 이라 한다.

// setTimeout : 일정시간이 지난 후에 함수를 실행
// setInterval : 일정 간격을 두고 함수를 실행

// let timer = setTimeout(func | code , [delay] , [arg1], [arg2])

// function sayHi(who, phrase) {
//     console.log(`${who} 님 ${phrase}`);
// }
//
// setTimeout(sayHi, 1000, '김', '안녕'); // 김 님 안녕

// let timer1 = setTimeout(() => console.log('아무런 일도 안일어남'), 1000);
// console.log(timer1);
//
// clearTimeout(timer1);
// console.log(timer1);

// let timer = setInterval(func | code , [delay] , [arg1], [arg2])

// let timer = setInterval(() => console.log('째깍'), 1000);
//
// setTimeout(() => {
//     clearInterval(timer);
//     console.log('정지');
// }, 5000);

// 중첩 setTimeout

// let timerId = setTimeout(
//     function tick() {
//         console.log('째깍');
//         timerId = setTimeout(tick, 2000);
//     }, 2000
// );

// 대기시간이 0인 setTimeout
// => 함수를 가능한 한 빨리 실행할 수 있다.
// 다만 현재 실행중인 스크립트의 처리가 종료된 이후에 스케쥴링한 함수를 실행한다.

// setTimeout(() => console.log('World'));
// console.log('Hello ');

// 예시에서 첫 번째 줄은 '0밀리초 후에 함수 호출하기’라는 할 일을 '계획표에 기록’해주는 역할을 합니다.
// 그런데 스케줄러는 현재 스크립트(alert 함수)의 실행이 종료되고 나서야
// '계획표에 어떤 할 일이 적혀있는지 확인’하므로, Hello가 먼저, World은 그다음에 출력됩니다.

/* exercise */

// 1. from에 명시한 숫자부터 to에 명시한 숫자까지 출력해주는 함수 printNumbers(from, to)를 만들어보세요.
// 숫자는 일 초 간격으로 출력되어야 합니다.

function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000)
}

printNumbers(1, 10);