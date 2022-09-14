/************************************************************/

// 타입스크립트의 인터페이스는 타입의 이름을 짓고,
// 코드 안의 계약을 정의한다.
function _printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = {size: 10 , label: 'size 10 obj'}
// 호출하는 함수의 매개변수보다 많은 프로퍼티를 가진 객체지만
// 최소한 필요한 프로퍼티가 있는지 와 타입이 잘 맞는지만 검사한다.
_printLabel(myObj);


// 문자열 타입의 label 프로퍼티 하나를 가지는 것을 의미하는 인터페이스
interface LabeledValue {
    label : string;
}

// 다른 언어처럼 매개변수가 위 인터페이스를 구현해야한다고 명시하는 것은 아니다
// 단지 인터페이스가 요구하는 프로퍼티들이 존재하는지, 프로퍼티가 요구하는 타입을 가졌는지만을 확인한다.
function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

printLabel(myObj);

/************************************************************/

interface SquareConfig {
    color?: string; // 선택적 프로퍼티
    width?: number; // 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서, 사용가능한 속성을 기술한다.
}

function createSquare(config: SquareConfig) : {color :string; area : number} {
    let newSquare = {color : 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: 'black'});