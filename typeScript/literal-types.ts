// 문자열 리터럴 타입

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
    animate (dx : number , dy : number , easing : Easing) {
        if (easing === 'ease-in') {

        } else if (easing === 'ease-out') {

        } else if (easing === 'ease-in-out') {

        } else {
            // 타입을 무시하게 되면 이 곳에 도달할 수 있다.
        }
    }
}

let button = new UIElement();

// button.animate(0, 0, 'uneasy'); 허용된 문자열이 아닌 경우 오류 발생

// 숫자형 리터럴 타입

function rollDice() : 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6 ) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}