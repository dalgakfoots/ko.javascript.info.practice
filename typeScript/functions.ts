function add (x : number, y : number) : number {
    return x + y;
}
// 각 파라미터와 반환 타입을 지정할 수 있다.
// 반환타입은 생략이 가능함
let _myAdd = function ( x: number , y: number ) : number {return x + y};

/************************************************************/

let __myAdd : (x: number , y : number) => number =
    function (x : number , y : number) : number {
        return x + y;
    };


// 타입추론
let myAdd : (baseValue : number , increment : number) => number =
    function (x, y) {
        return x + y;};


/************************************************************/

function _buildName(firstName: string, lastName = 'smith') {
    if (lastName) return `${firstName} ${lastName}`;
    else return firstName;
}

/************************************************************/

function buildName(firstName: string, ...restOfName: string[]) {
    return `${firstName} ${restOfName.join(" ")}`;
}

let buildNameFun : (fname : string , ...rest : string[]) => string = buildName;

/************************************************************/

let _deck = {
    suits : ['hearts' , 'spades' , 'clubs' , 'diamonds'],
    cards : Array(52),
    createCardPicker : function () {
         return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit : this.suits[pickedSuit] , card: pickedCard % 13};

        }
    }
}

let cardPicker = _deck.createCardPicker();
let pickedCard = cardPicker();

/************************************************************/

interface Card {
    suit : string;
    card : number;
}

interface Deck {
    suits : string[];
    cards : number[];
    createCardPicker(this : Deck) : () => Card;
    // 명시적으로 선언된 this 매개변수는 함수의 매개변수 목록에서
    // 가장 먼저 나오는 가짜 매개변수이다.
}

let deck : Deck = {
    suits : ['hearts' , 'spades' , 'clubs' , 'diamonds'],
    cards : Array(52),

    createCardPicker: function (this : Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

/************************************************************/

class Handler {
    info : string;
    _onClickGood(this: void , e : Event) {
        console.log('clicked');
    }

    // onClickGood = (e : Event) => {this.info = e.message}
}

/************************************************************/

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x : {suit : string; card : number;} []) : number;
function pickCard(x: number): {suit : string ; card: number;} ;
function pickCard(x) : any {

    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }

    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
