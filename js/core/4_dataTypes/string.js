let str = 'hello';

// 첫번째 글자
console.log(str[0]); // h
console.log(str.charAt(0)); //h

// 마지막 글자
console.log(str[str.length - 1]); //o

// 특정글자에 접근하기 : 근래에는 대괄호를 사용하는 것이 일반적임.

console.log(str[1000]); // undefined
console.log(str.charAt(1000)); // '' (빈문자열)

for(let value of str) {
    console.log(`${value}`);
}

// 문자열의 불변성
let hi = 'Hi';

hi[0] = 'h'; // 동작하지 않음
console.log(hi); //Hi

let hi1 = 'Hi';

hi1 = 'h' + hi1[1];
console.log(hi1); //hi

// 대소문자 변경하기
let string1 = 'vivivly';

console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

console.log(string1[string1.length - 1].toUpperCase());

// str.indexOf(substr , pos)

let phrase = 'Widget with id';

console.log(phrase.indexOf('Widget')); // 0 : phrase 는 Widget 으로 시작
console.log(phrase.indexOf('widget')); // -1 : 없음

console.log(phrase.indexOf('id')); // 1 (Widget 의 id)

console.log(phrase.indexOf('id', 2)); // 12 : index:2 부터 id가 등장하는 위치


let phrase1 = 'As sly as a fox , as strong as an ox';
let target = 'as';

let pos = 0;
while (true) {
    let foundPos = phrase1.indexOf(target, pos);
    if (foundPos === -1) break;

    console.log(`위치 : ${foundPos}`);
    pos = foundPos + 1;
}

// includes , startsWith , endsWith

console.log(phrase.includes('Widget')); // true
console.log(phrase.includes('hi')); // false

console.log('Widget'.includes('id',2)); // false

console.log('Widget'.startsWith('Wi')); // true
console.log('Widget'.endsWith('et')); // true

// 부분 문자열 출력
// slice 만 알아도 충분할 것임.

let x = 'stringify';

//str.slice(start, [,end])
console.log(x.slice(0, 5)); // strin : 0~5번째위치까지 (5번째 포함 안됨)
console.log(x.slice(0, 1)); // s

console.log(x.slice(2)); // ringify : 2번째 부터 끝까지

console.log(x.slice(-4, -1)); // 끝에서 4번째 부터 1번째 위치까지

// str.substring(start [, end])

console.log(x.substring(2, 6)); // ring : 2번째와 6번째 사이에 있는 문자열 반환 (6번째 포함 안됨)
console.log(x.substring(6, 2)); // ring

// str.substr(start [,length])

console.log(x.substr(2, 4)); // 2번째 부터 글자 4개


/* Exercise */

// 1. str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요.

console.log(ucFirst('john'));
function ucFirst(str) {
    let result = str[0].toUpperCase() + str.slice(1);
    return result
}

// 2. str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요.
// 해당 문자열이 없으면 false를 반환하면 됩니다.

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

function checkSpam(str) {
    let temp = str.toLowerCase();
    return temp.includes('viagra') || temp.includes('xxx');
}

// 3. str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 대체해주는 함수 truncate(str, maxlength)를 만들어봅시다.
// 새로 만든 문자열의 길이는 maxlength가 되어야 합니다.

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

function truncate(str, maxlength) {
    let temp = str;
    if(temp.length > maxlength) {
        temp = temp.slice(0, maxlength - 1) + "...";
    }
    return temp;
}

// 4. 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정해 봅시다.
// 위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)를 작성해 봅시다.

console.log(extractCurrencyValue('$120') === 120);

function extractCurrencyValue(str) {
    if (str.includes('$')) {
        return +str.slice(1);
    }
}