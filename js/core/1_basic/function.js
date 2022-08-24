// 함수 선언 방식
function showMessage(from, text = textDefaultFunction()) {

    // 기본값을 설정할 수 있는 다른 방법
    // if(from === undefined) text = '빈 문자열';
    from = from || '빈문자열';

    console.log(`message from ${from} : ${text}`);
}

function textDefaultFunction() {
    return "no text given"
}

showMessage('kimyeonmin', 'I love you');
showMessage('hamseungwoo');
showMessage();


function showCount(count) {
    console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

function noReturn(){
    return;
}

console.log(noReturn() === undefined); // true => return 지시자만 있거나 return 문이 없다면 undefined 를 반환한다.


