// switch case 문의 인수에는 어떤 표현식이든 가능하다.

let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
        console.log("여기가 실행된다.");
        break;

    default :
        console.log("skip");
}